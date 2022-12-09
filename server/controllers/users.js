import User from "../models/User.js";

/* == Read == */

export const getUser = async(req, res) => {
    try{

        const {id} = req.params;
        const  user = await User.findById(id);

        res.status(201).json(user);

    }catch(err){

        res.status(404).json({Message : err.message});

    }
}

export const getUserFriends = async(req, res) => {

    try{

        const {id} = req.params;
        const  user = await User.findById(id);
        
        const friends = await Promise.all(
            user.Friends.map(id => User.findById(id))
        );



        const formattedFriends = friends.map( 
            ({_id, FirstName, LastNamem, Occupation, Location, PicturePath}) => {
                return {_id, FirstName, LastNamem, Occupation, Location, PicturePath}
            }
        );

        res.status(201).json(formattedFriends);

    }catch(err){

        res.status(404).json({Message : err.message});

    }

};

/* == Update == */

export const addRemoveFriends = async (req ,res) => {
    
    try{

        const {id, friendId} = req.params;

        const user = await User.findById(id);
        const friend = await User.findById(friendId);

        // Remove each friend from the last of friends of each other 
        if(user.Friends.includes(friendId)){
            // Update the list of each one of them
            user.Friends.filter( (id) => id !== friendId);
            friend.Friends = friend.Friends.filter( (id) => id !== id );
            
        }else {
            // add each users to the friend list of each other
            user.Friends.push(friendId);
            friend.Friends.push(id);

        }

        await user.save();
        await friend.save();

        // Then send the new list to the user side 

        const friends = await Promise.all(
            user.Friends.map(id => User.findById(id))
        )

        const formattedFriends = friends.map( 
            ({_id, FirstName, LastNamem, Occupation, Location, PicturePath}) => {
                return {_id, FirstName, LastNamem, Occupation, Location, PicturePath}
            }
        )

        res.status(200).json(formattedFriends);
        
    }catch(err){

        res.status(404).json({Message : err.message});

    }

}