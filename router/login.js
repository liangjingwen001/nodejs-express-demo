const express = require('express')
const router = express.Router()
const jwt = require('../utils/jwt') // 引入jwt文件

router.post('/index', (req, res) => {
let {us, ps} = req.body
if(us && ps){
    // 登录成功后生成一个token并返回给前端
    let token = jwt.createToken({login: true, name: us})
    res.send({code: "200", msg: '登陆成功', token: token})
} else {
    res.send({code: "300", msg: '用户名或密码不正确'})
}
})

// 暴露user路由
module.exports = router