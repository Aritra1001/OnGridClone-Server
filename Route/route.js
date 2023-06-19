const router = require('express').Router();
const userFunc = require('../controller/userController');
const middleFunc = require('../middleware/userMiddleware');

router.post('/signup', userFunc.signup);
router.post('/login',userFunc.login );
router.post('/bookDemo', middleFunc.requiresSignIn, userFunc.bookDemo);

module.exports = router;