import mongoose from "mongoose";
import config from "config";

const db = config.get("mongoURI")

const connectDB = async () => {
    try {
        await mongoose.connect(db)

        console.log('Successfully connected to DB')
    } catch (error) {
        console.log(error.message)

        //To fail the application
        process.exit(1);
    }
}

export default connectDB;