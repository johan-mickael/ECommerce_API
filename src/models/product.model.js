const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: false },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  oldPrice: { type: Number, required: false },
  avgRating: { type: Number, required: false },
  rating: { type: Number, required: false },
}, {collection: 'product'});

const Product = mongoose.model('product', productSchema);

module.exports = Product;
