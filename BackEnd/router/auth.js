const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('../db/conn');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const User = require("../models/userSchema");
const authenticate = require('../middleware/authenticate');
router.use(cookieParser());
router.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true

}));
router.get('/', (req, res) => {
    res.send("hello from router js")
})


// using async method
router.post('/register', async (req, res) => {
    const { name, email, phone, address, password, cpassword } = req.body;
    console.log(name, email, phone)
    // checking for input to be filled by user
    if (!name || !email || !phone || !address || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill fields properly" })
    }


    try {
        const userExists = await User.findOne({ email: email });
        if (userExists) {
            return res.status(422).json({ error: "Email already exist" })
        } else if (password !== cpassword) {
            return res.status(422).json({ error: "Password not matching " })
        } else {
            const user = new User({
                name, email, phone, address, password, cpassword
            })
            let userRegister = await user.save();
            res.status(201).json({ message: "user registered successfully" });

        }



    } catch (err) {
        console.log(err);
    }
    // res.json({ message: req.body })
})




//creating login route 
router.post('/signin', async (req, res) => {

    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Please fill the data" })
        }

        const userLogin = await User.findOne({ email: email })


        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)

            let token = await userLogin.generateAuthToken();
            console.log(token)

            res.cookie('jwtauth', token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            })


            // console.log(isMatch)
            if (!isMatch) {
                res.status(400).json({ error: "Invalid Credentials pass" })
            } else {

                res.json({ message: "user signed success" });
            }
        } else {
            res.status(400).json({ error: "Invalid Credentials email" })
        }


    } catch (err) {
        console.log(err)
    }

})

router.get('/cart', authenticate, (req, res) => {
    console.log("This is cart section page")
    console.log(req.rootUser)
    res.send(req.rootUser)
})


module.exports = router
