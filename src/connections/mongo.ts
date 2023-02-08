import mongoose from 'mongoose';

const connectMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
    } catch (error) {
        console.error(error)
        process.exit(1);
    }
}

export default connectMongo;