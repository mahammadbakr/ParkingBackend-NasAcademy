const http = require('http');
const express=require('express')
var bodyParser = require('body-parser');
const rateLimitHandler = require("./RateHandling/RateLimitHandler");
require('dotenv').config({ path: './.env' }); //environment variable 

const app=express();

//// Handle Body Psrsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

////Handle Limit Rates
const limiter = rateLimitHandler({});
app.use(limiter);

////Handle API Routing
const router=require('./Router/Router')
app.use('',router)

const port = process.env.Port;

app.listen(port, () => {
  console.log(`Server running at Port: ${port}/`);
});

// access .env with => process.env.NODE_ENV 