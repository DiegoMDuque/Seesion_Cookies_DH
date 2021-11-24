const { body } = require('express-validator')

const express = require('express');
const router = express.Router();
const { navigationController } = require('../controller')

const validaciones = [
    body('name').notEmpty().withMessage('Ingresar el nombre'),
    body('colors').notEmpty().withMessage('Seleccionar un color'),
    body('email').notEmpty().withMessage('Ingresar el email'),
    body('age').notEmpty().withMessage('Ingresar la edad')    
    .isNumeric().withMessage('Debe ser un número')
]

router.get('/',navigationController.getHome)
router.get('/ingress',navigationController.getIngress)
router.post('/ingress', validaciones, navigationController.create)

module.exports = router;