const express = require('express')
const app = express()
const parser = require('body-parser')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop');



app.use(parser.urlencoded({extended: false}))
app.use(adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
  res.status(404).send("<h1>Page not found 404</h1>")
})
app.listen(3000)
console.log('server has loaded on port 3000');