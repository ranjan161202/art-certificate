const express = require('express');
const multer = require('multer');
const Image = require('../models/Image');

const router = express.Router();
const upload = multer();



router.post('/uploadImage', upload.single('image'), async (req, res) => {
  try {
    const existingImage = await Image.findOne({ name: req.file.originalname });

    if (existingImage) {
      // If the image already exists in the database, send the data back to the frontend
      return res.status(200).json({ message: 'Image already exists', imageData: existingImage.data });
    }

    // If the image doesn't exist, save it to the database
    const newImage = new Image({
      name: req.file.originalname,
      data: req.file.buffer,
      contentType: req.file.mimetype
    });
    await newImage.save();
    res.status(201).json({ message: 'Image uploaded successfully', imageData: newImage.data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});



module.exports = router;
