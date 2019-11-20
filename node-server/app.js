const express = require('express')
const app = express()
const parser = require('body-parser')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop');
const path = require('path')

const rootDir = require('./util/path')

app.use(parser.urlencoded({extended: false}))
app.use(adminRoutes);
app.use(shopRoutes);
 app.use( express.static(path.join(rootDir,'public')));
app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
})
app.listen(3000)
console.log('server has loaded on port 3000');