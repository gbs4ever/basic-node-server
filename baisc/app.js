const http = require('http')
const routes = require('./routes')

//will run when the server gets a request 
const server = http.createServer(routes)



server.listen(3000)
console.log("server has loaded on port 3000")
