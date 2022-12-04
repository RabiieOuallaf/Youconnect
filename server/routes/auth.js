import express from 'express';
import login from '../controllers/auth.js';


const Router = express.Router();

Router.post('/login', login);

export default Router;