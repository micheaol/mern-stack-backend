import mongoose from 'mongoose';


const userSchema = mongoose.Schema({
    name: String,
    email: String,
    contact: String,
    address: String,
});


const User = mongoose.model('user', userSchema);

export default User;