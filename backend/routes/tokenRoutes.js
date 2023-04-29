import express from 'express';
import {
  validateToken,
} from '../controllers/tokenController.js';
import { isAdmin, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protect, validateToken);

// router.post('/login', authUser);
// router.route('/:id?').post(registerUser).get(protect, isAdmin, getUsersAdmin);
// router.route('/profile').patch(protect, updateUserProfile);

export default router;