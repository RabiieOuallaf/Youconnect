import express, { application } from "express";

import {getUser , getUserFriends , addRemoveFriends} from "../controllers/users.js";

import { VerifyToken } from "../middlewares/auth.js";

const Router = express.Router();

/* == Read == */ 

Router.get("/:id" , VerifyToken, getUser); 
Router.get("/:id/friends" , VerifyToken, getUserFriends);


/* == Update == */

Router.patch("/:id/:friendId", VerifyToken, addRemoveFriends);

export default Router;