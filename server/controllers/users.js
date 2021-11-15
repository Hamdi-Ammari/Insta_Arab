import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import UserSchema from '../models/userModel.js';

export const signup = async (req,res) => {
    const {firstName,lastName,email,password,confirmPassword} = req.body;
    try {
        const existingUser = await UserSchema.findOne({email});
        if (existingUser) return res.status(400).json({message:"email already exist"});
        if (password !== confirmPassword) return res.status(400).json({message:"password don't match"});
        const hashedPassword = await bcrypt.hash(password,12);
        const result = await UserSchema.create({email,password:hashedPassword,name:`${firstName} ${lastName}`});
        const token = jwt.sign({email:result.email,id:result._id},'test');
        res.status(201).json({result,token});
    } catch (error) {
        res.status(500).json({message:"something went wrong.Try again later"});
        console.log(error)
    }
}


export const signin = async (req,res) => {
    const {email,password} = req.body;
    try {
        const existingUser = await UserSchema.findOne({email});
        if (!existingUser) return res.status(404).json({message:"user doesn't exist"});
        const isPaswordCorrect = await bcrypt.compare(password,existingUser.password);
        if(!isPaswordCorrect) return res.status(400).json({message:"password incorrect"});

        const token = jwt.sign({email:existingUser.email,id:existingUser._id},'test');
        res.status(200).json({result:existingUser,token});
    } catch (error) {
        res.status(500).json({message:"something went wrong.Try again later"});
        console.log(error)
    }
}