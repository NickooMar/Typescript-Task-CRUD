import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connectionDatabase = await mongoose.connect(
      `${process.env.MONGO_URI}`
    );

    console.log(`Connection made ${connectionDatabase.connection.host}`);
  } catch (error) {
    console.error(error);
  }
};
