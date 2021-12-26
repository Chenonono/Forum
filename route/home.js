const express = require('express');

//创建展示页面路由
const home = express.Router();

//创建二级路由
home.get('/', require('../app/controller/home/index'));
home.get('/article', require('../app/controller/home/article'));
home.post('/comment', require('../app/controller/home/comment'));
module.exports = home;