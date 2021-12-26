const bcrypt = require('bcrypt');
const { User } = require('../../model/user');
module.exports = async(req, res, next) => {
    //解构
    const { username, email, role, state, password } = req.body;
    //即将要修改的用户id
    const id = req.query.id;
    // res.send(body.password);
    let user = await User.findOne({ _id: id });
    //密码对比
    //const isValue = await bcrypt.compare(password, user.password);
    if (password == user.password) {
        //更新用户信息
        await User.updateOne({ _id: id }, {
            username: username,
            email: email,
            role: role,
            state: state
        });
        res.redirect('/admin/user');
    } else {
        let obj = { path: '/admin/user-edit', message: '密码比对失败，不能进行用户信息的修改', id: id }
        next(JSON.stringify(obj));
    }
}