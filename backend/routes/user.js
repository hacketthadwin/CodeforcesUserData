const express = require('express');
const router = express.Router();

const {login, signup} = require('../controller/userController');
const {auth,isDoctor, isPatient} = require('../middlewares/authMiddleware');

router.post('/login', login);
router.post('/signup', signup);

//testing route for middleware

router.get('/test', auth, (req, res) => {
    res.status(200).json({
        success: true,
        message: "Protected route accessed successfully",
    });
});

//protected route for doctors

router.get('/doctor', auth, isDoctor, (req, res) => {
    res.status(200).json({
        success: true,
        message: "Doctor route accessed successfully",
    });
});
//protected route for patients  
router.get('/patient', auth, isPatient, (req, res) => {
    res.status(200).json({
        success: true,
        message: "Patient route accessed successfully",
    });
});


module.exports = router;