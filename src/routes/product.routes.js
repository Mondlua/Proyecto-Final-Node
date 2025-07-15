//* Router
import { Router } from "express";
import productController from "../controllers/product.controller.js";

const router = Router();

router.get("/", productController.getProducts);
router.get("/:id", productController.getProductById);
router.post("/create", productController.createProduct); // El requerimiento pone create en la ruta en vez de sólo tener /
router.delete("/:id", productController.deleteProduct);

export default router;