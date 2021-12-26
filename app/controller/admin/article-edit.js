const { Article } = require('../../model/article');
module.exports = async(req, res) => {
    //获取地址栏的id参数
    const { message, id } = req.query;
    if (id) {
        //修改操作
        let article = await Article.findOne({ _id: id });
        res.render('admin/article-edit', {
            message: message,
            user: user,
            link: '/admin/user-modify?id=' + id,
            button: '修改'
        });
    } else {
        res.render('admin/article-edit', {
            message: message,
            link: '/admin/article-add',
            button: '添加'
        });
    }
}