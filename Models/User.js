import mongoose from 'mongoose';

const User= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },  
    password:{
        type:String,
        required:true
    },
});
const userModel = mongoose.model('User',User);
export default userModel;