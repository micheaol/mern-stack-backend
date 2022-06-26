import mongoose from 'mongoose';


const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    contact: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    avatar: {
        type: String
    }
});


const User = mongoose.model('user', userSchema);

export default User;