const { Router } = require("express");
const productController = require("../controllers/product.controller");
const router = Router();

router.post("/product", productController.addProduct);
router.get("/product", productController.getAllProducts);
router.get("/product/:id", productController.getProductById);
router.put("/product/:id", productController.updateProductById);
router.delete("/product/:id", productController.deleteProductBId);

module.exports = router;
