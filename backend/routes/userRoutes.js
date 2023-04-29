import express from 'express';
import {
  authUser,
  validateToken,
  getUsersAdmin,
  registerUser,
  updateUserProfile,
} from '../controllers/userController.js';
import { isAdmin, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login', authUser);

router.get('/validateToken', protect, validateToken);

router.route('/:id?').post(registerUser).get(protect, isAdmin, getUsersAdmin);

router.route('/profile').patch(protect, updateUserProfile);

export default router;
