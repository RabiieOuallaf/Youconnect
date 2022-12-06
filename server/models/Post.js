import mongoose from "mongoose";


const PostSchema = mongoose.Schema(
    {
        userId: {

            type: Number,
            require: true,
            
        },
        UfirstName: {
            type: String,
            require: true,
        },
        ULastName: {
            type: String,
            require: true,
        },
        Location: String,
        Description: String,
        picturePath : String,
        UprofilePicture : String,
        Likes :{
            type: Number,
            of: Boolean,
        },
        Comments : {
            type : Array,
            default : []
        }


    },
    {timestamps: true}
)

const Post = mongoose.model("Post", PostSchema);

export default Post;