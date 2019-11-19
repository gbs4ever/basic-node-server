const express = require('express');
const router = express.Router();


router.get('/form', (req, res, next) => {
	res.send(
		'<form action ="/users" method="POST" > <input type ="text" name="title"><button type="submit">submit you name</button>  </form>',
	);

});

router.post('/users', (req, res, next) => {
	console.log(req.body);
	res.redirect('/');
});


module.exports = router
