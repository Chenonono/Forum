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
//创建用户列表路由
admin.get('/user', require('../app/controller/admin/userPage'));
//实现退出功能
admin.get('/logout', require('../app/controller/admin/logout'));
//实现用户编辑功能
admin.get('/user-edit', require('../app/controller/admin/user-edit'));
//实现用户添加功能
admin.post('/user-edit', require('../app/controller/admin/user-edit-fn'));
//实现用户修改功能
admin.post('/user-modify', require('../app/controller/admin/user-modify'));
//实现用户删除功能
admin.get('/delete', require('../app/controller/admin/user-delete'));
//文章列表
admin.get('/article', require('../app/controller/admin/article'));
//添加文章
admin.get('/article-edit', require('../app/controller/admin/article-edit'));
//实现文章添加功能
admin.post('/article-add', require('../app/controller/admin/article-add'))
module.exports = admin;