import express from 'express';
import {
  getAllCoupon,
  createCoupon,
  getCouponById,
  getCouponByName,
  updateCoupon,
  deleteCoupon
} from '../controllers/couponController.js';

const router = express.Router();

router.route('/all').get(getAllCoupon),
router.route('/').post(createCoupon);
router.route('/?').get(getCouponByName);
router.route('/coupon/:id').get(getCouponById)
                           .patch(updateCoupon)
                           .delete(deleteCoupon);

export default router;