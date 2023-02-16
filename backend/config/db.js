import mongoose from 'mongoose';
// const env = require("dotenv")
// env.config()

export default async function connectDB() {
  
  // const { MONGODB_URI } = process.env
  // const options = {
  //     useNewUrlParser: true,
  //     useCreateIndex: true,
  //     useUnifiedTopology: true,
  //     useFindAndModify: false
  // };

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log(`%cMongoDB Connected: ${conn.connection.host}`, 'color:green');
  } catch (error) {
    console.error(`%cError: ${error.message}`, 'color:red');
    process.exit(1);
  }
}
