const bcrypt = require("bcrypt");
const User = require("../../models/UserSignUp");


const createUser = async (userData) => {
    try {
        // Destructure the userData object to extract the values for name, email, and password
        const { email, password, confirmPassword } = userData;
        console.log(password, confirmPassword);

        // Check if the username or email already exists in the database
        const existingEmail = await User.findOne({ email });

        if (password !== confirmPassword) {
            return "Password and confirmed password do not match";
        }


        if (existingEmail) {
            return "User already exists or Email already in use";
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user object with the extracted values and the hashed password
        const newUser = new User({
            email,
            password: hashedPassword,
        });

        // Save the user object to the database
        await newUser.save();

        return "User was successfully created";

    } catch (error) {
        // If there is an error, throw it for the controller to handle
        throw error;
    }
};

module.exports = createUser;
