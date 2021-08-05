const { validationResult, check } = require("express-validator")


exports.registerRules = () => [
    check('username', 'this field is required').notEmpty(),
    check('email', 'This field is required').notEmpty(),
    check('email', 'This field shoould be a valid email').isEmail(),
    check('phone', 'This field is required').notEmpty(),
    check('password', 'This field is required').isLength({ min: 6 }),

];

exports.validator = (req, res, next) => {
    const errors = validationResult(req);
    errors.isEmpty() ? next() : res.status(400).json({ msg: errors.array() })
};