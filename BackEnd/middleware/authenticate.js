const jwt = require('jsonwebtoken');
const User = require('../models/userSchema')


const Authenticate = async (req, res, next) => {
    try {
        // console.log("pre token")

        const token = req.cookies.jwtauth;
        // console.log(token, 10)
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        // console.log(verifyToken, 12);
        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });
        // console.log(rootUser, 14)

        if (!rootUser) {
            console.log("this is root error");
            throw new Error('user not found ')
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userId = rootUser._id;
        req.email = rootUser.email;

        // console.log(req.token, req.rootUser, req.userId, req.email);

        next()
    } catch (error) {
        console.log("catch error: " + error)
        res.status(401).send("unauthorised")
    }
}

module.exports = Authenticate;