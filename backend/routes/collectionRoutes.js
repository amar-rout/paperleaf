import express from 'express';
import {
  getAllCollection,
  getCollections,
  createCollection,
  getCollectionById,
  updateCollection,
  deleteCollection
} from '../controllers/collectionController.js';

import { isAdmin, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getAllCollection)
                 .post(protect, isAdmin, createCollection);
router.route('/all').get(getCollections);
router.route('/:id').get(getCollectionById)
                    .patch(protect, isAdmin, updateCollection)
                    .delete(protect, isAdmin, deleteCollection);

export default router;