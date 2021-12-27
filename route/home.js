const express = require('express');

//创建展示页面路由
const home = express.Router();

//创建二级路由
home.get('/', require('../app/controller/home/index'));
home.get('/article', require('../app/controller/home/article'));
home.post('/comment', require('../app/controller/home/comment'));

//普通用户登录
home.get('/login', require('../app/controller/home/user-loginPage'));
//实现登录功能
home.post('/login', require('../app/controller/home/user-login'));
//实现退出功能
home.get('/logout', require('../app/controller/home/logout'));
module.exports = home;