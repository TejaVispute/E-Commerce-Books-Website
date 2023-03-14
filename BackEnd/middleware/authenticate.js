const jwt = require('jsonwebtoken');
const User = require('../models/userSchema')
const authenticate = async (req, res, next) => {
    try {
        console.log("pre token")

        const token = req.cookies.jwtauth;
        console.log(token)
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY)
        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });
        console.log(rootUser)
        if (!rootUser) {
            throw new Error('user not found ')
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userId = rootUser._id;

        next()
    } catch (error) {
        res.status(401).send("unauthorised")
        // console.log(error)
    }
}

module.exports = authenticate;