import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

if (process.env.NODE_ENV === 'dev') {
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
  
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} environment on port ${PORT}`));
