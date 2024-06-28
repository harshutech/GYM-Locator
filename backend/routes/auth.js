const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const fetchuser = require('../middleware/fetchuser')
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'harshpatil';


//Route:1 create a user using :POST "/api/auth/createuser"  no login required
router.post('/createuser', [
    body('fullname', "Enter a name atleast 3 character").isLength({ min: 3 }),
    body('email', 'Enter a valid Email').isEmail(),
    body("phoneNumber", 'Enter a valid phone Number').isLength({ min: 10, max: 10 }),
    body('password', 'Enter a valid Password').isLength({ min: 3 })
], async (req, res) => {
    // if there are errors return the bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // check weatherr the user with this email  exist already
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "sorry a user with this email already exists" })
        }
        const salt =await bcrypt.genSalt(10);
        const secPassword = await bcrypt.hash(req.body.password,salt)
        // create a new user
        user = await User.create({
            fullname: req.body.fullname,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            password: secPassword
        })

        const data = {
            user:{
                id:user.id
            }
        }
      const authtoken =  jwt.sign(data, JWT_SECRET);

        res.json({authtoken})
        // catch errors
    } catch (error) {
        console.error(error.message)
        res.status(500).send("some error occured")
    }

})



//Route:2 Authenticate  a user using :POST "/api/auth/login"  no login required

router.post('/login', [ 
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Password cannot be blank').exists()
], async (req, res) => {
// if there are errors return the bad request and the errors
const errors = validationResult(req);
if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
}

const {email,password} = req.body;
try {
    let user =await User.findOne({email});
    if(!user){
        return res.status(400).json({error:"Please try to login with correct credentials"})
    }
    const passwordCompare = await  bcrypt.compare(password, user.password);
    if(!passwordCompare){
        return res.status(400).json({error:"Please try to login with correct credentials"})
    }

        const data = {
            user:{
                id:user.id
            }
        }
        const authtoken = jwt.sign(data,JWT_SECRET);
        res.json({authtoken})
    
} catch (error) {
    console.error(error.message)
    res.status(500).send("Internal Server Error")
}
})


//Route:3 Get loggedin user details using :POST "/api/auth/getuser"  login required
router.get('/getuser',fetchuser, async (req, res) => {

try {
   const UserID = req.user.id; // addded const keyword to remove errors 
    const user = await User.findById(UserID).select("-password")
    res.send(user)
} catch (error) {
    console.error(error.message)
    res.status(500).send("Internal Server Error")
}
})


module.exports = router

// using POST request is good choice while password security