import express from 'express';
import {
  getAllCollection,
  createCollection,
  getCollectionById,
  updateCollection,
  deleteCollection
} from '../controllers/collectionController.js';

const router = express.Router();

router.route('/').get(getAllCollection)
                 .post(createCollection);

router.route('/:id').get(getCollectionById)
                    .patch(updateCollection)
                    .delete(deleteCollection);

export default router;