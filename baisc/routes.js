const fs = require('fs')
const  requestHandeler = (req,res)=>{
  const url = req.url
  const method = req.method

if (url === '/') {
  res.write("<html>")
  res.write("<head><title>enter message tag</title></head>")
  res.write('<body> <form action= "/message" method = "POST"><input name= "message" type="text"><button type= "submit">Send data </button> </body>')
  res.write("</html>")
  return res.end()
}
if (url === "/message" && method === 'POST') {
  const body = []
  req.on('data', (chunk) => {

    body.push(chunk)
  })
  return req.on('end', () => {
    const parsedData = Buffer.concat(body).toString()
    const message = parsedData.split('=')[1]
    fs.writeFile("message.txt", message, (err) => {
      res.statusCode = 302
      res.setHeader('Location', '/')
      return res.end()
    })
  })


}
res.setHeader('Content-Type', 'text/html')
res.write("<html>")
res.write("<head><title>my page</title></head>")
res.write('<body> <h1> hello from my node.js! <h1> </body>')
res.write("</html>")
res.end()
}
module.exports = requestHandeler
