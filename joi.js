const Joi = require('joi');

//定义验证规则
const schema = {
    username: Joi.string().min(2).max(5).error(new Error('username没有通过验证'))
};
async function run() {
    //实现验证
    try {
        await Joi.validate({
            username: 'a'
        }, schema);
    } catch {
        console.log('未通过');
        return;
    }
    console.log('通过');
}

run();