const Product = require('../models/product.model');

class ProductService {
  async getAllProducts(search = '', page = 1, limit = 10) {
    return await Product.find({ title: { $regex: search, $options: 'i' }})
    .skip(page * limit)
    .limit(limit);
  }

  async getProductById(id) {
    return await Product.findById(id);
  }

  async createProduct(data) {
    return await Product.create(data);
  }

  async updateProduct(id, data) {
    return await Product.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteProduct(id) {
    return await Product.findByIdAndRemove(id);
  }
}

module.exports = ProductService;
