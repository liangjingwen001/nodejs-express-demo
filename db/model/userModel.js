const mongoose = require('mongoose')

// 获取Schema对象
let uesrSchema = new mongoose.Schema({
    userName: {type:String,required: true},
    passWord: {type:String,required: true},
    age: Number,
})

// 将Schema对象转换成数据模型
let user = mongoose.model('user', uesrSchema)

// 插入数据
// user.insertMany({userName: '迪迦', passWord: '666', age: 180})
// .then((res) => {
//     console.log(res)
//     console.log('插入成功')
// })
// .catch((err) => {
//     console.log('插入失败')
// })

// 查询数据
// user.find()
// .then((res) => {
//     console.log(res)
// })
// .catch((err) => {
//     console.log('查询失败')
// })

// 删除数据
// user.remove({userName: 'lisi'})
// .then(() => {
//     console.log('删除成功')
// })
// .catch(() => {
//     console.log('删除失败')
// })

module.exports = user