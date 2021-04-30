require('dotenv').config({ path: './.env' });


function RateLimitHandler(assets) {
  assets = Object.assign(
    {
      keyGenerator: function (req ) {
        return req.ip;
      },
      skip: function () {
        return false;
      },
      handler: function (req, res ) {
        res.status(assets.statusCode).send(assets.message);
      },
      onLimitReached: function () {},
      windowMs: process.env.Seconds * 1000, // e.g: 10000 Milliseconds (10 Seconds) until get Timeout
      max: process.env.Max_Requests, // e.g:  10 Requests per milliseconds before timeout
      message: "There is Too many requests, please try again later.", //Message when time is out
      statusCode: 429, //There is Too many requests Error Code[429]
      headers: true, //Send and customize rate limit header
      draft_polli_ratelimit_headers: false, //Support for standardization headers
      skipFailedRequests: false, // Failed requests will Skip
      skipSuccessfulRequests: false, // Successful requests will Skip
    },
    assets
  );

  const MemoryStore = require("./MemoryHandler");

  // Perform Store in Memory
  assets.store = assets.store || new MemoryStore(assets.windowMs);

  function rateLimtHandler(req, res, next) {
    Promise.resolve(assets.skip(req, res))
      .then((skip) => {
        if (skip) {
          return next();
        }
        const result =
          typeof assets.max === "function"
              ? assets.max(req, res)
              : assets.max;

        const secretKey = assets.keyGenerator(req, res);
        assets.store.incr(secretKey, function (err, current, resetTime) {
          if (err) {
            return next(err);
          }
         
          Promise.resolve(result)
            .then((max) => {

              req.rateLimit = {
                limit: max,
                current: current,
                remaining: Math.max(max - current, 0),
                resetTime: resetTime,
              };

              if (
                assets.skipFailedRequests ||
                assets.skipSuccessfulRequests
              ) {
                let decremented = false;
                const decrementKey = () => {
                  if (!decremented) {
                    assets.store.decrement(secretKey);
                    decremented = true;
                  }
                };
                if (assets.skipFailedRequests) {
                  res.on("finish", function () {
                    if (res.statusCode >= 400) {
                      decrementKey();
                    }
                  });
                  res.on("close", () => {
                    if (!res.finished) {
                      decrementKey();
                    }
                  });

                  res.on("error", () => decrementKey());
                }

                if (assets.skipSuccessfulRequests) {
                  res.on("finish", function () {
                    if (res.statusCode < 400) {
                      assets.store.decrement(secretKey);
                    }
                  });
                }
              }
              if (max && current === max + 1) {
                assets.onLimitReached(req, res, assets);
              }
              if (max && current > max) {
                if (assets.headers && !res.headersSent) {
                  res.setHeader(
                    "Retry",
                    Math.ceil(assets.windowMs / 1000)
                  );
                }
                return assets.handler(req, res, next);
              }

              next();

              return null;
            })
            .catch(next);
        });

        return null;
      })
      .catch(next);
  }

  rateLimtHandler.resetKey = assets.store.resetKey.bind(assets.store);
  rateLimtHandler.resetIp = rateLimtHandler.resetKey;

  return rateLimtHandler;
}

module.exports = RateLimitHandler;
