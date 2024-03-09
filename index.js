/*const http = require('http')

const hostname = '127.0.0.1'
const port = 7000

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Node Static</title>
</head>
<body>
    <h1>HELLO FROM BACKEND</h1>
</body>
</html>
    `)
})

server.listen(port, hostname, () => {
    console.log(`SERVER STARTED ON http://${hostname}:${port}`)
})*/

const express = require("express")
const app = express()

const static = express.static('Static')

app.use(static)

/*app.get('/', function(req,res){
    res.send("KAYE RA SETTINGA!!")
})*/

app.listen(3000 , () => {
    console.log(`http://127.0.0.1:3000`)
})
