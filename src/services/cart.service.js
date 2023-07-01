const { ObjectId } = require("mongodb");
const Cart = require("../models/cart.model");
const ProductService = require("./product.service");

const productService = new ProductService();

class CartService {
  async getAllCarts() {
    var carts = await Cart.find();
    var cartsWithItems = await Promise.all(
      carts.map(async (cart) => {
        var product = await productService.getProductById(cart.productId);
        cart = cart.toObject();
        cart.item = product;
        console.log(product);
        return cart;
      })
    );
    return cartsWithItems;
  }

  async saveCart(data) {
    try {
      const cart = await Cart.findOne({ productId: data.productId });
      if (cart) {
        cart.quantity = cart.quantity + data.quantity;
        return await cart.save();
      }
      if (data.quantity > 0) return await Cart.create(data);

      return null;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getCartById(id) {
    return await Cart.findById(id);
  }

  async createCart(data) {
    return await Cart.create(data);
  }

  async updateCart(id, data) {
    return await Cart.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteCart(id) {
    return await Cart.findByIdAndRemove(id);
  }

  async countCart() {
    return await Cart.countDocuments();
  }

  async countCartItem() {
    var carts = await Cart.find();
    var total = 0;
    carts.forEach((cart) => {
      total += cart.quantity;
    });
    return total;
  }

  async updateCartItem(id, data) {
    const cart = await Cart.findById(id);
    if (cart) {
      cart.quantity = data.quantity;
      if (cart.quantity <= 0) {
        console.log(id);
        return await Cart.deleteOne({ _id: new ObjectId(id) });
      }
      return await cart.save();
    }
  }
}

module.exports = CartService;
