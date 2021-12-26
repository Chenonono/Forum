//登录拦截
const guard = (req, res, next) => {
    //判断用户登录状态
    if (req.url != '/login' && !req.session.username) {
        res.redirect('/admin/login');
    } else {
        next();
    }
}
module.exports = guard;