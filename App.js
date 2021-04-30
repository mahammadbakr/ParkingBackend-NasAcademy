const http = require('http');
const express=require('express')

const app=express();

const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Nas Academy !');
});

server.listen(port, () => {
  console.log(`Server running at Port: ${port}/`);
});

// access .env with => process.env.NODE_ENV 