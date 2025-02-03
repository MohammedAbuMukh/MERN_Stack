import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config(); // Load environment variables

const dbName = process.env.DB;
const username = process.env.ATLAS_USERNAME;
const password = process.env.ATLAS_PASSWORD;

const uri = `mongodb+srv://${username}:${password}@cluster0.81tgg.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;

const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("✅ Established a connection to the database");
    } catch (err) {
        console.error("❌ Something went wrong when connecting to the database:", err);
    }
};

export default connectDB;
