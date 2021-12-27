const mongoose = require('mongoose');
//const bcrypt = require('bcrypt');
const Joi = require('joi');
//创建集合规则
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    email: {
        type: String,
        //保证邮箱地址不重复
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    //admin normal
    role: {
        type: String,
        required: true
    },
    //0=>启用 1=>禁用
    state: {
        type: Number,
        default: 0
    }
});

//创建集合
const User = mongoose.model('User', userSchema);

async function creatUser() {
    //const salt = await bcrypt.genSalt(10);
    //const pass = await bcrypt.hash('123456', salt)
    const user = await User.create({
        username: 'chenjy',
        email: 'chenjy@email.com',
        password: 'admin',
        role: 'admin',
        state: 0

    });
    // .then(() => console.log('添加成功')).catch(() => console.log('添加失败'));
}

// creatUser();
//验证用户信息
const validateUser = user => {
    const schema = {
        username: Joi.string().min(2).max(12).required().error(new Error('用户名不符合验证规则')),
        email: Joi.string().email().required().error(new Error('邮箱格式不符合要求')),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('密码格式不符合要求')),
        role: Joi.string().valid('normal', 'admin').required().error(new Error('角色值非法')),
        state: Joi.number().valid(0, 1).required().error(new Error('状态值非法'))
    };
    //实现验证
    return Joi.validate(user, schema);
}

module.exports = {
    User,
    validateUser
}