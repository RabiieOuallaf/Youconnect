import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/auth.js';
import {Register} from './controllers/auth.js';
import postRoutes from './routes/posts.js';
import {VerifyToken} from './middlewares/auth.js';
import { createPost } from './controllers/posts.js';
import userRoutes from './routes/users.js';
import User from './models/User.js';
import Post from './models/Post.js';
import {users, posts} from './Data/DefaultData.js';

/* == Configrations == */

const __filename = fileURLToPath(import.meta.url); // FileURLToPath : return the correct file path (import.meta.url to get the import file path)
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();

app.use(express.json());
app.use(helmet()); // For security
app.use(helmet.crossOriginResourcePolicy({ policy : "cross-origin" }));
app.use(bodyParser.json({limit:"30mb" , extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb" , extended: true}));
app.use(cors);
app.use("/assets" , express.static(path.join(__dirname, 'public/assets')));




/* == File Storage == */

const Storage = multer.diskStorage({
    
    destination: (req, file, cb) => {
        cb(null, '../public/assets')
    },
    
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const upload = multer({ Storage })

/* == Files routes == */

app.post("/auth/register", upload.single("picture"), Register);
app.post("/post", VerifyToken, upload.single("picture"), createPost);
/* == Routes == */ 

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/post", postRoutes);

app.get("/", (req,res) => {
    res.status(201);
});

/* == Mongoose setup == */ 

const PORT = process.env.PORT || 5001;
mongoose.connect(process.env.MONGO_URL)
        .then( () => {

            app.listen(PORT, () => { 
                console.log(`Server Port : ${PORT};`);
            });

        })
        .catch( () => {
            console.log("Error in mongoDB connection !")
        });
 