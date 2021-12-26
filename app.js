//导入express模块
const express = require('express');
const app = express();
//导入home,admin模块
const home = require('./route/home');
//const admin = require('./route/admin');

//导入其他模块
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const dateFormat = require('dateformat');
const morgan = require('morgan');
const config = require('config');
//导入模板引擎
const template = require('art-template');

//数据库连接
require('./app/model/connection');

//处理post请求参数
app.use(bodyParser.urlencoded({
    extended: false
}));

//配置session
app.use(session({ secret: 'secret key' }));

//开放静态资源文件
app.use(express.static(path.join(__dirname, 'public')));

//express模板所在的位置
app.set('views', path.join(__dirname, 'app/views'));

//模板的默认后缀
app.set('view engine', 'art');

//渲染后缀为art所使用的的模板引擎是什么
app.engine('art', require('express-art-template'));

//导入日期
template.defaults.imports.dateFormat = dateFormat;

//匹配路由的请求路径
app.use('/', home);
app.use('/home', home);
//app.use('/admin', admin);

//监听端口
app.listen(10201, () => {
    console.log('服务器开启成功！');
});