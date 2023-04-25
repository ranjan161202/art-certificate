const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  name: String,
  data: Buffer,
  imageHash: String,
  contentType: String
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
