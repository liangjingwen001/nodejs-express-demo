const express = require('express')
const app = express()
// const session = require('express-session')
// const cookieParse = require('cookie-parser')
const path = require('path')
// 处理post请求数据
const bodyParser = require('body-parser')
// 连接数据库
const db = require('./db/connect.js')
const jwt = require('./utils/jwt.js')

// 引入路由
const userRouter = require('./router/userRouter.js')
const loginRouter = require('./router/login.js')


// 系统token设置失败
// app.use(session({
//     secret: 'sjdfgjhsdj', // 文安全性的考虑设置secret参数
//     cookie: {maxAge: 1000 * 60 * 5}, // 设置过期时间
//     resave: true,  // 即使session没有被修改，也保存session值，默认为true
//     saveUninitialized: false, //无论有没有session、cookie，每次请求都设置个session、cookie
// }))

// 处理form表单数据，处理json格式数据
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

// 使用路由
// app.use('/user', (req, res, next) => {
//     let {token} = req.body
//     if (token) {
//         // 解析token
//         jwt.checkToken(token)
//         .then((res) => {
//                 next()
//         })
//         .catch((err) => {
//             res.send({code: 300, msg: err})
//         })
//     } else {
//         res.send({code: 400, msg: '请先登录'})
//     }
// }, userRouter)

app.use("/",(res, req, next) => {
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Methods", "GET,POST,PUT");
    req.header("Access-Control-Allow-Headers", "content-type");
    next();  
})

app.use('/user', userRouter)
app.use('/login', loginRouter)
// 域名:3000 直接指向规定的静态目录http:/localhost:3000
app.use('/', express.static(path.join(__dirname, './public')))

app.listen(3000, () => {
    console.log('服务开启');
})
