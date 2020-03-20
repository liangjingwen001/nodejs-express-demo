const jwt = require('jsonwebtoken') // npm i jsonwebtoken -s
let screat = 'gjhgashdgajsk'
let expirationDate = 1000 * 60 // 设置过期时间

// 创建token
function createToken(info) {
    info.createTime = Date.now();
    return jwt.sign(info, screat)
}

// 检查token
function checkToken(token) {
    let nowTime = Date.now();
    return new Promise((resolve, reject) => {
        jwt.verify(token, screat, (err, data) => {
            if (err) {
                reject('token 验证失败')
            } else if (data.createTime + expirationDate < nowTime) {
                reject('token 已过期')
            } else {
                resolve(data)
            }
        })
    })
}

module.exports = {
    createToken,
    checkToken
}
