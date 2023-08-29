require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const localhost = process.env.VITE_LOCALHOST_ORIGIN;
const production = process.env.VITE_VERCEL_APP_ORIGIN;
const cookieParser = require("cookie-parser");
app.use(cookieParser());



const corsOptions = {
    origin: [
        localhost,
        production,
    ],
    credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

//testing login
const userRoutes = require("./routes/users");

app.use("/", userRoutes);




// Connect to MongoDB
connectDB();
mongoose.connection.once("open", () => {
    console.log("MongoDB connection SUCCESS");
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});




