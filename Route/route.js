const router = require('express').Router();
const userFunc = require('../controller/userController')

router.post('/signup', userFunc.signup);

module.exports = router;