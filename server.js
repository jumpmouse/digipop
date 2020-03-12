
// import * as express from 'express';
// import { readFileSync } from 'fs';

const express = require('express');
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

const app = express();
// const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('*.*', express.static(__dirname + '/dist', {
    maxAge: '1m'
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/*', (req, res) => {
  console.log(Object.keys(req));
  console.log('__++_++==================____');
  console.log(Object.keys(res));
  console.log('__++_++==================____');
  console.log(req.res);
  console.log('__++_++==================____');
  console.log(req.headers);
  console.log('__++_++==================____');
  console.log(req.query);
  console.log('__++_++==================____');
  console.log(req.post);
  console.log('__++_++==================____');
  console.log(req.body);
  console.log('__++_++==================____');
  res.send({data: 'alooooooooooooooooooooo'});
});

app.route('*').get((req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(PORT, () => {
    console.log(`Angular Universal Node Express server listening on  port ${PORT}`);
});