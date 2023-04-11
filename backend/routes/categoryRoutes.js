import express from 'express';
import {
  getAllCategory,
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory
} from '../controllers/categoryController.js';

const router = express.Router();

router.route('/').get(getAllCategory),
router.route('/').post(createCategory);

router.route('/:id').get(getCategoryById)
                    .patch(updateCategory)
                    .delete(deleteCategory);

export default router;