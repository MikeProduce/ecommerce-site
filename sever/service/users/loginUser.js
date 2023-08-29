const User = require("../../models/UserSignUp");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Login = async (email, password) => {
    try {
        let user = await User.findOne({ email });
        if (!user) {
            // If the user is not found, return null (or any other appropriate value)
            return null;
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            // If the password doesn't match, return null (or any other appropriate value)
            return null;
        }

        // Create a JWT token
        const payload = {
            email: email,
            // You can add more data to the payload if needed
        };
        const secretKey = process.env.SECRET_KEY; // Replace with your actual secret key
        const options = {
            expiresIn: "1h", // Token expiration time
        };
        const token = jwt.sign(payload, secretKey, options);

        // Return the user data and the JWT token
        return {
            email: email,
            token: token
        };
    } catch (error) {
        // If any error occurs, return null (or any other appropriate value)
        console.error(error);
        return null;
    }
};

module.exports = Login;


