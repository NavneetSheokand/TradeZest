const User = require("../Model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "User already exists" });
    }
    const user = await User.create({
      email,
      username,
      password ,
      createdAt,
    });

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res.status(201).json({
      message: "User signed in successfully",
      success: true,
        token,
      user,
    });

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Signup failed" });
  }
};


module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({success: false,message:'All fields are required'})
    }
    const user = await User.findOne({ email });
    if(!user){
      return res.json({success: false,message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({success: false,message:'Incorrect password or email' }) 
    }
     const token = createSecretToken(user._id);
     res.cookie("token", token, {
       withCredentials: true,
       httpOnly: false,
     });
     res.status(201).json({ message: "User logged in successfully", success: true,token,
      user, });
     next()
  } catch (error) {
    console.error(error);
  }
}