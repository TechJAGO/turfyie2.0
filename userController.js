const Admindetail = require ('../models/adminModel')
const UserDetail = require ('../models/userModel')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const JWT_SECRET = process.env.JWT_SECRET;

const createToken =(_id)=>{
  return jwt.sign({ _id }, JWT_SECRET)
}

// login admin

const loginAdmin = async (req,res)=>{
    let success = false;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, error: errors.array() });
    }
  
    const { email, password } = req.body;
    try {
      let admin = await Admindetail.findOne({ email });
      if (!admin) {
        return res.status(400).json({ success, error: "Invalid credentials" });
      }
  
      const comparePassword = await bcrypt.compare(password, admin.password);
      if (!comparePassword) {
        return res.status(400).json({ success, error: "Invalid credentials" });
      }
  
      const authtoken = createToken(admin._id)
      const role = "TurfOwner"
      const name = admin.aname
      success = true;
      return res.status(200).json({success, authtoken,role, name, admin})
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("Some error occurred");
    }
}

// signup admin 

const signAdmin = async (req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, error: errors.array() });
    }
  
    try {
      let admin = await Admindetail.findOne({ email: req.body.email });
      let admin2 = await Admindetail.findOne({ number: req.body.phone });
      if (admin || admin2) {
        return res
          .status(400)
          .json({ success: false, error: "Credentials already in use" });
      }
  
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
  
      admin = await Admindetail.create({
        phone: req.body.phone,
        aname: req.body.aname,
        email: req.body.email,
        password: secPass,
        turfName: req.body.turfName,
        turfAd: req.body.turfAd,
      });
  
  
      const authtoken = createToken(admin._id)
      const role = "TurfOwner"
      const name = admin.aname
      return res.json({ success: true, authtoken,role, name, admin });
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("Some error occurred");
    }

}

// Login User 

const loginUser = async (req,res)=>{
  let success = false;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, error: errors.array() });
  }

  const { email, password } = req.body;
  try {
    let user = await UserDetail.findOne({ email });
    if (!user) {
      return res.status(400).json({ success, error: "Invalid credentials" });
    }

    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      return res.status(400).json({ success, error: "Invalid credentials" });
    }

    const authtoken = createToken(user._id)
    const role = "User"
    const name = user.username
    success = true;
    return res.status(200).json({success, authtoken,role, name, user})
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Some error occurred");
  }
}

// SignUp User 

const signUser = async (req,res)=>{

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, error: errors.array() });
  }

  try {
    let user = await UserDetail.findOne({ email: req.body.email });
    let user2 = await UserDetail.findOne({ number: req.body.phone });
    if (user || user2) {
      return res
        .status(400)
        .json({ success: false, error: "Credentials already in use" });
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    user = await UserDetail.create({
      phone: req.body.phone,
      username: req.body.username,
      email: req.body.email,
      password: secPass,
    });

    const authtoken = createToken(user._id)
    const role = "TurfOwner"
    const name = user.username
    return res.json({ success: true, authtoken,role , name});
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Some error occurred");
  }

}

// get user and admin data 

// const getdata = async (req,res)=>{
//   const error = validationResult(req);

//   if(!error.isEmpty()){
//     return res.status(400).json({ success: false, error: error.array()})
//   }

//   try{

//     let user = await UserDetail.findOne({ email });
//     let admin = await Admindetail.findOne({ email });

//   } catch (err){

//   }
// }

module.exports = { loginAdmin, signAdmin, loginUser, signUser }