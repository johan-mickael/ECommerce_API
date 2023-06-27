const ProductService = require("../services/product.service");

const productService = new ProductService();

class ProductController {
  async getAllProducts(req, res) {
    try {
      const { search, page, limit } = req.query;
      const pageNumber = page ? parseInt(page) : 1;
      const pageSize = limit ? parseInt(limit) : 5;
      const products = await productService.getAllProducts(search, pageNumber, pageSize);
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  }

  async getProductById(req, res) {
    try {
      const product = await productService.getProductById(req.params.id);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  }

  async createProduct(req, res) {
    try {
      const product = await productService.createProduct(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  }

  async updateProduct(req, res) {
    try {
      const product = await productService.updateProduct(
        req.params.id,
        req.body
      );
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  }

  async deleteProduct(req, res) {
    try {
      const product = await productService.deleteProduct(req.params.id);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  }
}

module.exports = ProductController;
