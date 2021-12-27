const bcrypt = require('bcrypt');
const { Article } = require('../../model/article');
module.exports = async(req, res, next) => {
    //解构
    //console.log(req.body)
    const { author_hidden, cover, content } = req.body;
    //即将要修改的文章id
    const id = req.query.id;    
    /**
    let article = await Article.findOne({ _id: id });
    if (author_hidden == article.author) {
        await Article.updateOne({ _id: id }, {
            cover: cover,
            content: content
        });
        res.redirect('/admin/article');
    } else {
        let obj = { path: '/admin/article-edit', message: '作者信息比对失败，不能进行用户信息的修改', id: id }
        next(JSON.stringify(obj));
    }
    */
    res.redirect('/admin/article');
}