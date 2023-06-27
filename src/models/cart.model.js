const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productId: { type: String, required: true },
  quantity: { type: Number, required: true },
}, {collection: 'cart'});

const Product = mongoose.model('cart', productSchema);

module.exports = Product;
