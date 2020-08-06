const express = require('express')
const { body } = require('express-validator');
const guideController = require('../controllers/guideController')
const authentication = require('../middleware/authenticationHandler');
const authorization = require('../middleware/authorizationHandler');

const router = express.Router()

router.post('/', [
    //validation : express validator
    body('firstname').not().isEmpty().withMessage('Field name is required'),
    body('lastname').not().isEmpty().withMessage('Field name is required'),
    body('email').not().isEmpty().withMessage('Field email is required').isEmail().withMessage('Wrong email format'),
    body('password').not().isEmpty().withMessage('Field password is required').isLength({ min: 6 }).withMessage('Password must be  at least 6 digits')
], guideController.signup);
router.post('/signin',
    body('email').not().isEmpty().withMessage('Field email is required').isEmail().withMessage('Wrong email format'),
    body('password').not().isEmpty().withMessage('Field password is required')
    , guideController.signin);
router.get('/me', authentication.isLoggedIn, guideController.getProfile);

//get all guide in db
router.get('/', guideController.index);

//get guide
router.get('/:id', authentication.isLoggedIn, guideController.getGuide);

//profile guide route
router.put('/:id', authentication.isLoggedIn, guideController.updateGuide);

router.delete('/:id', [authentication.isLoggedIn, authorization.isAdmin], guideController.deleteGuide);
module.exports = router

