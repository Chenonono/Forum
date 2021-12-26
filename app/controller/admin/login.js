const { User } = require('../../model/user');
const bcrypt = require('bcrypt');
module.exports = async(req, res) => {
    const users= [
        {
            "username":"admin",
            "email":"admin@email.com",
            "password":"admin",
            "role":"admin",
            "state":0
        }
    ];
    //await User.insertMany(users);
    //接受请求参数
    const { email, password } = req.body;
    //没有输入邮件地址
    if (email.trim().length == 0 || password.trim().length == 0) {
        return res.status(400).render('admin/error', { msg: '邮件或者密码错误' });
    }
    //根据邮件地址查询用户
    //如何查询到了用户user变量为空
    let user = await User.findOne({ email });
    if (user) {
        //密码等于数据库的密码
        //password == user.password
        if (password==user.password) {
            //登录成功
            req.session.username = user.username;
            // res.send('登录成功');
            req.app.locals.userInfo = user;
            //跳转用户类别页面
            res.redirect('/admin/user');
        } else {
            res.status(400).render('admin/error', { msg: '邮件或者密码错误！' })
        }
    } else {
        //没有查询到用户
        res.status(400).render('admin/error', { msg: '邮件或者密码错误！' })
    }

}