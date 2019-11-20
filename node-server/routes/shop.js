const express = require('express')
const path = require('path')
const router = express.Router()



router.get('/',(req,res,next)=>{
  res.sendFile(path.join(__dirname,'../','views','index.html'))

})
router.get('/product', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'product.html'))

})
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports= router