const mongoose = require('mongoose');

//mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://127.0.0.1:27017/forum', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('数据库连接成功！'))
.catch(() => console.log('数据库连接失败！'));