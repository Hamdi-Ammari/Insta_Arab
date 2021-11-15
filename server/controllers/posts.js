import mongoose from 'mongoose';
import PostModel from '../models/postModel.js';


export const getPosts = async (req,res) => {
    try {
        const thePosts = await PostModel.find();
        res.status(200).json(thePosts);
    } catch (error) {
        res.status(404).json({message:error});
        console.log(error)
    }
}


export const createPost = async (req,res) => {
    const post = req.body;

    try {
        if(!req.userId) return res.json({message:'Unauthenticated'});
        const newPost = new PostModel({...post,creator:req.userId,createdAt:new Date().toISOString()});
        await newPost.save();
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}

export const updatePost = async (req,res) => {
    const {id} = req.params;
    const post = req.body;
    try {
        if(!req.userId) return res.json({message:'Unauthenticated'});
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message:'no post founded'});
        const updatedPost = await PostModel.findByIdAndUpdate(id,post,{new:true});
        res.status(200).json(updatedPost);   
    } catch (error) {
        res.status(409).json({message:error})
        console.log(error)
    }
}

export const likePost = async (req,res) => {
    const {id} = req.params;
    
    try {
        if(!req.userId) return res.json({message:'Unauthenticated'});
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message:'not found'});
        const post = await PostModel.findById(id);
        const index = post.likes.findIndex(id => id === String(req.userId))
        if(index === -1) {
            post.likes.push(req.userId)
        } else{
            post.likes = post.likes.filter(id => id !== String(req.userId))
        }

        const updatedPost = await PostModel.findByIdAndUpdate(id,post,{new:true})
        res.status(200).json(updatedPost)

    } catch (error) {
        res.status(409).json({message:error})
        console.log(error)
    }
}

export const addComment = async (req,res) => {
    const {id} = req.params;
    const {value} = req.body;

    try {
        if(!req.userId) return res.json({message:'Unauthenticated'});
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message:'not found'});
        const post = await PostModel.findById(id);
        post.comments.push(value);

        const updatedPost = await PostModel.findByIdAndUpdate(id,post,{new:true})
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(409).json({message:error});
        console.log(error)
    }
}

export const deletePost = async (req,res) => {
    const {id} = req.params;

    try {
        if(!req.userId) return res.json({message:'Unauthenticated'});
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message:'not found'});
        await PostModel.findByIdAndDelete(id);
        res.status(200).json({message:'Post deleted successfully'});   
    } catch (error) {
        res.status(409).json({message:error})
        console.log(error)
    }
}