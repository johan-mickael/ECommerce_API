const express = require("express");
const router = express.Router();
const CartController = require("../controllers/cart.controller");

const cartController = new CartController();

router.get("/", cartController.getAllCarts);
router.get("/sum", cartController.getCartsSum);
router.post("/remove/item/:id", cartController.updateCartItem);
router.get("/:id", cartController.getCartById);
router.post("/", cartController.saveCart);
router.put("/:id", cartController.updateCart);
router.delete("/:id", cartController.deleteCart);

module.exports = router;
