import path from 'path';
import express from 'express';
import multer from 'multer';
const router = express.Router();
import fs from 'fs';

let filename = null;

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`,
    );
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Images only!');
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

router.post('/', upload.single('image'), (req, res) => {
  // Replace is necessary since windows uses "\" for directories
  res.send(`/${req.file.path.replace(/\\/g, '/')}`);
});

router.delete('/:id', (req, res) => {
  const __dirname = path.resolve();
  fs.unlink(path.join(__dirname, '/uploads') + `/${req.params.id}`, (err) => {
    if (err) {
      res.send(err);
      return
    }
    //file removed
    res.send(`File ${req.params.id} deleted successfully.`);
  })
});


export default router;
