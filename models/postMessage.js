import mongoose from 'mongoose';


const postSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    message: {
        type: String,
        require: true
    },
    creator: {
        type: String,
        require: true
    },
    
    likes: {
        type: Number,
        default: 0,
        require: true
    },
    createdAt: {
        type: Date,
        default: new Date(),
        require: true
    },
});

const PostMessage = mongoose.model("postMessage", postSchema);

export default PostMessage;