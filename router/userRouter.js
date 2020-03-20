const express = require('express')
const router = express.Router()
const userMOdel = require('../db/model/userModel.js')

router.get('/detail', (req, res) => {
    // 查询数据
    let {us} = req.query
    userMOdel.find({userName: us})
    .then((data) => {
        res.send({code: "200", data: data, msg: '请求成功'})
    })
    .catch((err) => {
        console.log(err)
    })
})

router.post('/add', (req, res) => {
    // 插入数据
let {userName, passWord, age} = req.query
if(userName && passWord){
    userMOdel.insertMany({userName: userName, passWord: passWord, age: age})
    .then((data) => {
        res.send({code: "200", msg: '插入成功'})
    })
    .catch((err) => {
        res.send({code: "300", msg: '插入失败',data: err})
        console.log(err)
    })
} else {
    res.send({code: "300", msg: '参数不齐'})
}
})

// 暴露user路由
module.exports = router