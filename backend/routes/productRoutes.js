import express from 'express';
import {
  addReview,
  createProductAdmin,
  deleteProductAdmin,
  getCategoryNames,
  getFeaturedProducts,
  getProductByCategory,
  getProductById,
  getProducts,
  getAllProducts,
  getTopProducts,
  updateProductAdmin,
  removeProductImageAdmin,
  removeProductImagesAdmin,
  updateProductPublishedByCategory
} from '../controllers/productController.js';
import { isAdmin, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getProducts);
router.route('/all').get(getAllProducts);
router.route('/').post(createProductAdmin);
// router.route('/').post(protect, isAdmin, createProductAdmin);

router.route('/featured/:category?').get(getFeaturedProducts);

router.route('/top/:category?').get(getTopProducts);

router.route('/:id').get(getProductById)
                    .delete(deleteProductAdmin)
                    .patch(updateProductAdmin)
                    .put(removeProductImageAdmin);
router.route('/:id/removeImages?').put(removeProductImagesAdmin);
// .delete(protect, isAdmin, deleteProductAdmin)
// .patch(protect, isAdmin, updateProductAdmin);

router.route('/category/name').get(getCategoryNames);

router.route('/category/:category').get(getProductByCategory);

router.route('/category/:category?').patch(protect, isAdmin, updateProductPublishedByCategory);

router.route('/reviews/:id').post(protect, addReview);

export default router;
