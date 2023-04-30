import express from 'express';
import {
  createNewOrder,
  successOrder,
  addOrderItems,
  getAllOrders,
  getOrderById,
  getOrderUserOrders,
  putUpdateOrderPay,
  putUpdateOrderToDelivered,
} from '../controllers/orderController.js';
import { isAdmin, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router
  .route('/')
  .post(addOrderItems)
  .get(protect, isAdmin, getAllOrders);
  // .post(protect, addOrderItems)
  // .get(protect, isAdmin, getAllOrders);

router.route('/newOrder').post(createNewOrder);
router.route('/:id/success').post(successOrder);
// router.route('/newOrder').get(protect, createNewOrder);

router.route('/myorders').get(protect, getOrderUserOrders);

router.route('/:id/pay').put(putUpdateOrderPay);
// router.route('/:id/pay').put(protect, putUpdateOrderPay);

router.route('/:id/deliver').put(protect, isAdmin, putUpdateOrderToDelivered);

router.route('/:id').get(protect, getOrderById);

export default router;
