const CartService = require("../services/cart.service");

const cartService = new CartService();

class CartController {
  async getAllCarts(req, res) {
    try {
      const Carts = await cartService.getAllCarts();
      res.json(Carts);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  }

  async getCartById(req, res) {
    try {
      const Cart = await cartService.getCartById(req.params.id);
      if (!Cart) {
        return res.status(404).json({ error: "Cart not found" });
      }
      res.json(Cart);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  }

  async createCart(req, res) {
    try {
      const Cart = await cartService.createCart(req.body);
      res.status(201).json(Cart);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  }

  async updateCart(req, res) {
    try {
      const Cart = await cartService.updateCart(req.params.id, req.body);
      if (!Cart) {
        return res.status(404).json({ error: "Cart not found" });
      }
      res.json(Cart);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  }

  async deleteCart(req, res) {
    try {
      const Cart = await cartService.deleteCart(req.params.id);
      if (!Cart) {
        return res.status(404).json({ error: "Cart not found" });
      }
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  }

  async saveCart(req, res) {
    try {
      const Cart = await cartService.saveCart(req.body);
      res.json(Cart);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  }

  async getCartsSum(req, res) {
    try {
      const Cart = await cartService.getCartsSum();
      res.json(Cart);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
      console.log(error);
    }
  }

  async calculateTotalPrice(req, res) {
    try {
      const Cart = await cartService.calculateTotalPrice();
      res.json(Cart);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
      console.log(error);
    }
  }

  async updateCartItem(req, res) {
    try {
      const product = await cartService.updateCartItem(req.params.id, req.body);
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  }
}

module.exports = CartController;
