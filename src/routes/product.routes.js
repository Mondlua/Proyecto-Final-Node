//* Router
import { Router } from "express";
import productController from "../controllers/product.controller.js";
import { authentication } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", productController.getProducts);
router.get("/:id", productController.getProductById);
router.post("/create", authentication, productController.createProduct); // El requerimiento pone create en la ruta en vez de sólo tener /
router.delete("/:id", authentication, productController.deleteProduct);

export default router;
