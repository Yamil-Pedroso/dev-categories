import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI!, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as mongoose.MongooseOptions);
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
    } catch (error: any) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;