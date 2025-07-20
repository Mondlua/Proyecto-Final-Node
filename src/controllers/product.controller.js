//* Controller
import productService from "../services/product.service.js";

const getProducts = async (req, res) => {
  try {
    const products = await productService.getAll();
    res.status(200).json({ message: "Lista de productos", payload: products });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error interno del servidor", error: error.message });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(400).json({ message: "El ID es requerido" });
    }
    const product = await productService.getProduct(id);

    if (!product.exists())
      return res.status(404).json({ message: "Producto no encontrado" });

    res
      .status(200)
      .json({
        message: "Lista de productos",
        payload: { id: product.id, ...product.data() },
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error interno del servidor", error: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const { nombre, precio, disponible } = req.body;
    //* Validate
    const newProduct = {
      nombre,
      precio: +precio,
      disponible: disponible || false,
    };

    await productService.createProduct(newProduct);
    res
      .status(200)
      .json({ message: "Lista de productos", payload: newProduct });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error interno del servidor", error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(400).json({ message: "El ID es requerido" });
    }
    const product = await productService.getProduct(id);
    if (!product.exists())
      return res.status(404).json({ message: "Producto no encontrado" });

    await productService.deleteProduct(id);
    res.status(200).json({ message: "Producto eliminado", payload: { id } });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error interno del servidor", error: error.message });
  }
};

export default { getProducts, createProduct, getProductById, deleteProduct };
