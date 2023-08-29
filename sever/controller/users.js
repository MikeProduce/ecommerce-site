// controllers/loginController.js
// all user logic is in the service layer, so the controller is very simple:
//all user api is here.
const Login = require("../service/users/loginUser");
const createUser = require("../service/users/createUser")

const LoginUser = async (req, res) => {

    const { email, password } = req.body;
    try {
        const user = await Login(email, password);
        if (!user) {
            // If the user is not found or login fails, return an appropriate error response
            return res.status(401).send("Invalid email or password");
        }
        // If the login is successful, return the user data and access token
        res.status(200).send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send("Failed to log in user");
    }
};


const CreateUser = async (req, res) => {
    console.log(req.body)
    try {
        // Call the createUser service with the request body and file (if any)
        const result = await createUser(req.body);

        // Send a success message to the client
        res.send(result);
    } catch (error) {
        // If there is an error, log it to the console and send a failure response
        console.error(error);
        res.status(500).send("Failed to save user data");
    }
};




module.exports = {
    LoginUser, CreateUser
};
