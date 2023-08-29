const { check, validationResult } = require("express-validator");

exports.loginValidation = [
    check("email").isEmail().withMessage("Invalid email"),
    check("password").notEmpty().withMessage("Password is required"),
    (req, res, next) => {
        // Sanitize email and password fields
        req.body.email = req.body.email.normalizeEmail();
        req.body.password = req.body.password.escape();

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        next();
    },
];
