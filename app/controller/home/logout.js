module.exports = (req, res) => {
    req.session.destroy(function() {
        req.app.locals.userInfo = 0;
        res.clearCookie('connect.sid');
        res.redirect('/');
    })
}