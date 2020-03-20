const webSocket = require('ws')    // npm i ws --save
const ws = new webSocket.Server({port: 8080}, () => {
    console.log('webSocket 开启')
})

// 监听前端连接websocket
ws.on('connection', (client) => {
    console.log('前端链接websocket')
    client.send('欢迎使用websocket')
    client.on('message', (res) => {
        console.log(res)
    })
    client.on('close', () => {
        console.log('前端主动关闭websocket连接')
    })
})