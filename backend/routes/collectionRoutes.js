import express from 'express';
import {
  getAllCollection,
  createCollection,
  getCollectionById,
  updateCollection,
  deleteCollection
} from '../controllers/collectionController.js';

import { isAdmin, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(protect, isAdmin, getAllCollection)
                 .post(protect, isAdmin, createCollection);

router.route('/:id').get(protect, isAdmin, getCollectionById)
                    .patch(protect, isAdmin, updateCollection)
                    .delete(protect, isAdmin, deleteCollection);

export default router;