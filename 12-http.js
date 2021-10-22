//HTTP:
const http = require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to our home page')
    }
    if(req.url==='/about'){
        res.end('Here is the about page')
    }
    res.end(
        `<h1>Oops!</h1>`
    )
    console.log(req)
    res.write('Welcome to our home page')
    res.end()
})

server.listen(5000)