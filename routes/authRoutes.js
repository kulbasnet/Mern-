const express= require('express');
const router = express.Router();
const cors = require('cors');
const {test, UserSignup, Userlogin, getProfile} = require('../controllers/authController')

//middlewARE

router.use(
    cors({
        credentials : true,
        origin: 'http://localhost:5173'
    })
)

router.get('/', test)
router.post('/Sign', UserSignup)
router.post('/Login', Userlogin)
router.get('/profile', getProfile)

module.exports = router