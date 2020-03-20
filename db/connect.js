const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/dbDemo',{useNewUrlParser: true});

// 连接数据库
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('数据库连接成功')
})


