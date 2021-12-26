const Joi = require('joi');
const { User, validateUser } = require('../../model/user');
//const bcrypt = require('bcrypt');
module.exports = async(req, res, next) => {
    //定义对象验证规则
    try {
        await validateUser(req.body)
    } catch (e) {
        //验证没有通过
        //e.message
        //重定向为用户添加方
        // return res.redirect(`/admin/user-edit?message=${e.message}`);
        //JSON,stringifly()
        return next(JSON.stringify({ path: '/admin/user-edit', message: e.message }));
    }
    //实施验证
    //根据邮箱查询用户是否存在
    let user = await User.findOne({ email: req.body.email });
    if (user) {
        //如何用户存在邮箱已经背别人占用
        // return res.redirect(`/admin/user-edit?message=`);
        return next(JSON.stringify({ path: '/admin/user-edit', message: '邮箱地址已经被占用了' }))
    }
    //对密码进行加密处理
    //const salt = await bcrypt.genSalt(10);
    //const password = await bcrypt.hash(req.body.password, salt);
    //替换密码
    //req.body.password = password;
    await User.create(req.body);
    //返回用户列表页面
    res.redirect('/admin/user');
}