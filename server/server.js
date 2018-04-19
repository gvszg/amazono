const express = require('express'); // Web framework for node
const morgan = require('morgan');  // HTTP request logger middleware
const bodyParser = require('body-parser');  // Node.js body parsing middleware
const mongoose = require('mongoose');  // MongoDB object modeling tool designed to work in an asynchronous environment

const config = require('./config')

const app = express();

app.use(bodyParser.json());  // 指定解析JSON格式的內容
app.use(bodyParser.urlencoded({extended: false}));  // 使用querystring module處理url編碼
app.use(morgan('dev'));  // 設定log format

app.get('/', (req, res, next) => {
    res.json({
        user: 'Admin'
    });
});

app.listen(config.port, err => {
    console.log('Lauching server on port ' + config.port);
});
