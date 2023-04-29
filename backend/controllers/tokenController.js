import asyncHandler from 'express-async-handler';
import TokenModel from '../models/tokenModel.js';
import sanitize from '../utils/sanitize.js';
import UserModel from '../models/userModel.js';
// import Mongoose from 'mongoose';

// @desc Get all orders
// @route GET /api/orders/:id
// @access Private
export const validateToken = asyncHandler(async (req, res) => {
    const email = req.user.email;
    try {
        if (email) {
            const user = await UserModel.findOne({ "email": sanitize(email) });
            if (user) {
                const userJson = auth.authJSON(user);
                return await res.json({
                    success: true,
                    user: userJson
                });
            }
            else {
                const err = new Error();
                err.name = "Authentication Error";
                err.status = 401;
                err.message = "This user doesn't exists. Please provide a valid user credentials.";
                throw err;
            }
        }
        else {
            const error = new Error();
            error.name = "Bad Request";
            error.status = 400;
            error.message = "Please provide the email ID";
            throw error;
        }
    } catch (error) {
        next(error);
    }
});