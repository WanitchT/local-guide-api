const express = require('express')
const router = express.Router()
const planController   = require('../controllers/planController')
const authentication = require('../middleware/authenticationHandler');
const authorization = require('../middleware/authorizationHandler');








//Plan

router.post('/:id',planController.createPlan)

router.put('/:id',planController.updatePlan)

router.delete('/:id',authentication.isLoggedIn,planController.deletePlan)

module.exports = router