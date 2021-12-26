const express = require('express');
//导入用户集合
const { User } = require('../app/model/user');
const bcrypt = require('bcrypt');
//创建论坛展示页面路由
const admin = express.Router();

//创建二级路由
admin.get('/login', require('../app/controller/admin/loginPage'));
//实现登录功能
admin.post('/login', require('../app/controller/admin/login'));
//实现退出功能
admin.get('/logout', require('../app/controller/admin/logout'));

//用户列表
admin.get('/user', require('../app/controller/admin/userPage'));
//实现增加用户功能
admin.post('/user-edit', require('../app/controller/admin/user-edit-fn'));
//实现删除用户功能
admin.post('/udelete', require('../app/controller/admin/user-delete'));
//实现修改用户功能
admin.get('/user-edit', require('../app/controller/admin/user-edit'));
//实现修改用户功能
admin.post('/user-modify', require('../app/controller/admin/user-modify'));

//文章列表
admin.get('/article', require('../app/controller/admin/article'));
//实现增加文章功能
admin.post('/article-add', require('../app/controller/admin/article-add'))
//实现删除文章功能
admin.post('/adelete', require('../app/controller/admin/article-delete'))
//实现修改文章功能
admin.post('/article-edit', require('../app/controller/admin/article-edit'));
module.exports = admin;