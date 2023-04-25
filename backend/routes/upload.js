const express = require('express');
const multer = require('multer');
const crypto = require('crypto');
const Image = require('../models/Image');

const router = express.Router();
const upload = multer();

router.post('/uploadImage', upload.single('image'), async (req, res) => {
  try {
    // Calculate the hash of the uploaded image
    const hash = crypto.createHash('sha256').update(req.file.buffer).digest('hex');
    const existingImage = await Image.findOne({ imageHash: hash });

    if (existingImage) {
      // If the image already exists in the database, send the data back to the frontend
      return res.status(200).json({ message: 'Image already exists', imageHash:hash });
    }

    // If the image doesn't exist, save it to the database
    const newImage = new Image({
      imageName: req.file.originalname,
      imageHash: hash,
      data: req.file.buffer,
      contentType: req.file.mimetype
    });
    await newImage.save();
    res.status(201).json({ message: 'Image uploaded successfully', imageHash:hash });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
