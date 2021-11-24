const { validationResult } = require('express-validator')

const navigationController = {
    getHome: (req, res, next) => {
        res.render('index', { title: "Fran Generator" })
    },
    getIngress: (req, res, next) => {
        res.render('ingress', { title: "Ingress" })
    },
    create: (req, res, next) => {

        const validate = validationResult(req)
console.log(validate);
        if (validate.errors.length > 0) {
            return res.render('ingress', {
                errors: validate.mapped(),
                oldData: req.body
            });
        } else {

            let data = {
                name: req.body.name,
                colors: req.body.colors,
                email: req.body.email,
                age: req.body.age,
            }

            res.render('ingress', { data })
        }
    }
}

module.exports = navigationController