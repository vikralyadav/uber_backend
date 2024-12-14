const express = require('express')

const router = express.Router();
const captainController = require('../controllers/captain.controller')
const {body} = require('express-validator')
const authMiddleware = require('../middlewares/auth.middleware')


router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min: 3}).withMessage('atleast 3 character'),
    body('password').isLength({min: 6}).withMessage('at least 6 characters'),
    body('vehicle.color').isLength({min: 3}).withMessage('at least 3 characters'),
    body('vehicle.plate').isLength({min: 3}).withMessage('at least 3 characters'),
    body('vehicle.capacity').isInt({min: 1}).withMessage('at least 1 capacity'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('invalid vehicle')

],
 captainController.registerCaptain
)

router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min: 6}).withMessage('at least 6 characters'),


],

captainController.loginCaptain
)

router.get('/profile', authMiddleware.authCaptain ,captainController.getCaptainProfile)

router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain )



module.exports = router;
