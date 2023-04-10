const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("../db/conn");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const User = require("../models/userSchema");
const Cart = require("../models/cartSchema");
const Authenticate = require("../middleware/authenticate");
const Razorpay = require("razorpay");
const shortid = require("shortid");
const mongoose = require("mongoose");
const EmptyCart = require("../models/EmptyCartSchems")

router.use(cookieParser());
router.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
router.get("/", Authenticate, (req, res) => {
  res.send(req.rootUser);
});

// using async method
router.post("/register", async (req, res) => {
  const { name, email, phone, address, password, cpassword } = req.body;
  // console.log(name, email, phone)
  // checking for input to be filled by user
  if (!name || !email || !phone || !address || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill fields properly" });
  }

  try {
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      return res.status(422).json({ error: "Email already exist" });
    } else if (password !== cpassword) {
      return res.status(422).json({ error: "Password not matching " });
    } else {
      // creating a new user if not already existing
      const user = new User({
        name,
        email,
        phone,
        address,
        password,
        cpassword,
      });
      let userRegister = await user.save();

      // creating new empty cart when user regesters
      const emptyCartCreate = new EmptyCart({ email: email });
      const createdCartResult = await emptyCartCreate.save();
      console.log(createdCartResult);
      res.status(201).json({ message: "user registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
  // res.json({ message: req.body })
});

//creating login route
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Please fill the data" });
    }

    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      // console.log(isMatch)
      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credentials pass" });
      } else {
        let token = await userLogin.generateAuthToken();
        // console.log(token)

        res.cookie("jwtauth", token, {
          expires: new Date(Date.now() + 25892000000),
          httpOnly: true,
        });

        res.json({ message: "user signed success" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credentials email" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/cart", Authenticate, (req, res) => {
  // console.log(req.body)
  // console.log(req.rootUser)
  res.send(req.rootUser);
});

// proceed to buy route
router.get("/placeorderres", Authenticate, (req, res) => {
  // console.log("This is placeorder section")
  // console.log(req.rootUser)
  res.send(req.rootUser);
});

// Razorpay post Request
let razorpay = new Razorpay({
  key_id: "rzp_test_uD8A6e2bMoZRiA",
  key_secret: "DUyCYrGtajkQRs1xhgIAQrtU",
});
router.post("/razorpay", async (req, res) => {
  const payment_capture = 1;
  const currency = "INR";

  let options = {
    amount: 500,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };
  try {
    const response = await razorpay.orders.create(options);
    // console.log(response);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
      receipt: response.receipt,
    });
  } catch (e) {
    console.log(e);
  }
});

router.get("/logout", Authenticate, async (req, res) => {
  req.rootUser.tokens = [];

  // console.log("this is logout page");
  res.clearCookie("jwtauth", { path: "/" });
  await req.rootUser.save();
  res.status(200).send("User Logout");
});

// router.post("/placeorder", (req, res) => {
//   let books = req.body;c

//   console.log(...books);
//   // console.log(req.email);

//   res.json({ message: "success" });
// });

router.post("/placeorder", async (req, res) => {
  let { userEmail, cart } = req.body;



  // console.log(userLogin, "from place order");
  cart.forEach(async (cartItem) => {
    await Cart.updateOne(
      { email: userEmail },
      {
        $push: {
          "items":
            cartItem

        },
      }
    ).then(value => console.log(value)).catch(err => console.log(err));
  })
  res.json({ message: "success" })
  // console.log("end");
});




// previus user order route
router.get("/orderHistory", Authenticate, async (req, res) => {
  let userEmail = req.rootUser.email;
  const orderHistory = await Cart.findOne({ email: userEmail });
  console.log(orderHistory.items);

  res.json({ orderHistory })

});





//localhost:4000/placeorder

module.exports = router;
