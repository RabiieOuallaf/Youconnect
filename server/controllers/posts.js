import Post from "../models/Post.js";
import User from "../models/User.js";

/* == Create == */ 

export const createPost = async (req,res) => {
    
    try {
        const {userId , description, PicturePath} = req.body;
        const user = await User.findById(userId);

        const newPost = new Post({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            userPicturePath : user.picture,
            PicturePath,
            likes : {},
            comments : [],

        })

        await newPost.save();

        const post = await Post.find();
        res.json(201).json(post);
    }catch(err){
        res.status(409).message({Message : err.message})
    }

}

/* == Read == */ 

export const getFeedPosts = async(req,res) => {

    try{

        const post = await Post.find();
        res.status(200).json(post);

    }catch(err){
        res.status(404).message({Message : err.message})
    }

}

export const getUserPosts = async (req,res) => {

    try{

        const {userId} = req.body;
        const userPost = await Post.find({userId});
        
        res.status(201).json(userPost);
    }catch(err){
        res.status(404).message({Message : err.message})
    }

}

/* == Update == */

export const likePosts = async (req, res) => {

    try{

        const {id} = req.params;
        const {userId} = req.body;

        const post = await Post.findById(id);
        const isLiked = post.Likes.get;

        if(isLiked){
            post.Likes.delete(userId);
        }else {
            post.set(userId, true);
        }

        const updatePost = await Post.findOneAndUpdate(
            id, 
            {Likes: post.Likes},
            {new : true}
        );

        res.status(200).json(updatePost);

    }catch(err){
        res.status(404).message({Message : err.message})
    }

};