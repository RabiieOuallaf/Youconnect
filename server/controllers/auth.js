import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* == Register User == */

export const Register = async (req, res) => {
    
    try {
        const  {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation
        } = req.body;

        // Encrypt the password
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            firstName,
            lastName,
            email,
            password : passwordHash,
            picturePath,
            friends,
            location,
            occupation,
            viewdProfile : Math.floor(Math.random() * 100),
            impressions : Math.floor(Math.random() * 1000)
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);

    } catch (err) {

        res.status(500).json({error : err.message});
    }
}

/* == Login == */ 

const login = async (req, res) => {

    try{

        // Fist , look up if the user exsits or not 
        const {email , password} = req.body;
        const user = await User.findOne({email : email});

        if(!user) return res.status(404).json({ Warnning : "User does not exsit" });

        // if the user does exsits compare the passwords 

        const isMatch = bcrypt.compare(password,user.password );

        if(!isMatch) return res.status(404).json({Alert : "Email or password is wrong"});

        const token = jwt.sign({id : user._id}, process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({token , user});
        
    }catch(err){

        res.status(500).json({error : err.message});

    }

};

export default login;