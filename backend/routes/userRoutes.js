import express from 'express';
import {
  authUser,
  validateToken,
  getUsersAdmin,
  registerUser,
  updateUserProfile,
  updateUserPassword,
  requestPasswordReset,
  resetPassword,
  addAddress
} from '../controllers/userController.js';
import { isAdmin, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login', authUser);

router.get('/validateToken', protect, validateToken);

router.route('/:id?').post(registerUser).get(protect, isAdmin, getUsersAdmin);
router.route('/profile/addAddress').patch(protect, addAddress);
// router.route('/profile/getAddresses').post(protect, getAddresses);
router.route('/profile').patch(protect, updateUserProfile);
router.route('/profile/passwordChange').put(protect, updateUserPassword);
router.route('/profile/requestPasswordReset').post(requestPasswordReset);
router.route('/profile/resetPassword?').put(resetPassword);

export default router;
