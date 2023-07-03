import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import fs from 'fs';
import connectDB from './config/db.js';

import bodyParser from "body-parser";

import homeRoutes from './routes/homeRoutes.js';
import tokenRoutes from './routes/tokenRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import collectionRoutes from './routes/collectionRoutes.js';
import couponRoutes from './routes/couponRoutes.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

import cors from "cors";
const corsOrigin = [
  {
    origin: 'http://localhost:3000', //or whatever port your frontend is using
    credentials: true,
    optionSuccessStatus: 200
  },
  {
    origin: 'http://localhost:4000', //or whatever port your frontend is using
    credentials: true,
    optionSuccessStatus: 200
  },
  {
    origin: 'https://api.razorpay.com', //or whatever port your frontend is using
    credentials: true,
    optionSuccessStatus: 200
  },
]
app.use(cors(corsOrigin));

app.use('/api/homepage', homeRoutes);
app.use('/api/token', tokenRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/collection', collectionRoutes);
app.use('/api/coupons', couponRoutes);
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

const __dirname = path.resolve(); // Not available because its using ESM
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

if (process.env.NODE_ENV === 'production') {
  // app.get('/admin', (req, res) =>
  //   res.sendFile(
  //     path.resolve(__dirname, 'admin', 'build', 'index.html'),
  //   ),
  // );
  app.use(express.static(path.join(__dirname, 'frontend/build')));
  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, 'frontend', 'build', 'index.html'),
    ),
  );
} else {
  app.get('/', (req, res) => {
    res.send('Try hitting /API');
    console.warn('Hit the API!');
  });
}

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5010;
app.listen(
  PORT,
  console.log(`Server runing in ${process.env.NODE_ENV} on port ${PORT}`),
);
