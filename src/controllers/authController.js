const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
exports.signUp = async (req,res)=>{
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All input fields  are required" });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exist' });
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const user = new User({
            name, email, password: hashPassword
        });
        await user.save();
        return res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    
    
}
exports.logIn = async (req, res) => {

    try{
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({message:"All fields required"});
        
        }
        const user= await User.findOne({email})
        if(!user)
        {
            return res.status(400).json({message:"user not found"});
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:"invalid credentials i.e., password may be wrong"});
        }
        const token = jwt.sign(
            {userId:user._id},
            process.env.JWT_SECRET,
            {expiresIn:"1d"}
        );
        return res.status(200).json({message:'login successfull', token});
    }catch(error){
        return res.status(500).json({message:error.message});
    }
    };
