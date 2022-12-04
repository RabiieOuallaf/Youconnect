import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema(

    {
        firstName: {
            type: String, 
            require: true,
            min: 2,
            max: 50
        },

        lastName: {
            type: String,
            require: true,
            min:2,
            max: 50
        },

        email: {
            type: String, 
            require: true,
            max: 50,
            unique: true
        },

        password: {
            type: String, 
            require: true,
            min: 7,
        },

        picture: {
            type: String,
            default: ""
        },

        Friends: {
            type: Array,
            default: [],
        },
        location: String,
        

    },

    {timestamps: true}

);

const User = mongoose.model("User", UserSchema);

export default User;