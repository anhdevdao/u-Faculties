var express = require('express');
router = express.Router();

const authenticateController = require('../controllers/authenticate-controller'),
    registerController = require('../controllers/register-controller');


router.route('/controllers/authenticateController')
.post(authenticateController.authenticate);

router.route('/controllers/register-controller')
.post(registerController.register);

router.route('/signup')
.get((req, res) => res.render("signup"))

router.route('/')
.get((req, res) => res.render("login"))

router.route('/index')
.get((req, res) => res.render("index"))

router.route('/field_research')
.get((req, res) => res.render("field_research"))


module.exports = router;