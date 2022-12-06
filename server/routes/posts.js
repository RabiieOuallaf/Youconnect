import express from 'express';
import { getFeedPosts, getUserPosts, likePosts } from '../controllers/posts';
import { VerifyToken } from '../middlewares/auth';
const Router = express.Router();


/* == Read == */ 
// it will show all users posts 
Router.get("/", VerifyToken, getFeedPosts);

// it will show just a specif user posts
Router.get("/:userID/posts", VerifyToken, getUserPosts);

/* == Update == */ 

Router.patch("/:id/like", VerifyToken, likePosts);


export default Router;