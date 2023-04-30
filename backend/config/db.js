import mongoose from 'mongoose';
import dotenv from 'dotenv';
// const env = require("dotenv")
dotenv.config();

export default async function connectDB() {
  
  // const { MONGODB_URI } = process.env
  // const options = {
  //     useNewUrlParser: true,
  //     useCreateIndex: true,
  //     useUnifiedTopology: true,
  //     useFindAndModify: false
  // };

  try {
    const {MONGODB_USER, MONGODB_PASSWORD, MONGODB_URI, MONGODB_DBNAME, MONGODB_AUTH_SOURCE, MONGODB_READ_PREFERENCE} = process.env;
    const PASSWORD = encodeURIComponent(MONGODB_PASSWORD);
    const DB_URL = `mongodb://${MONGODB_USER}:${PASSWORD}@${MONGODB_URI}/${MONGODB_DBNAME}?authSource=${MONGODB_AUTH_SOURCE}&readPreference=${MONGODB_READ_PREFERENCE}&serverSelectionTimeoutMS=2000&ssl=false&directConnection=true`;
    const conn = await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    // const DB_URL = `mongodb://${DB_USER}:${PASSWORD}@89.116.230.218:27017/paperleaf_demo?retryWrites=true`;
    // ?compressors=zlib&gssapiServiceName=mongodb

    console.log(`%cMongoDB Connected: ${conn.connection.host}`, 'color:green');
  } catch (error) {
    console.error(`%cError: ${error.message}`, 'color:red');
    process.exit(1);
  }
}
