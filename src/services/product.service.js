//* Services
import {
  getAllProducts,
  getProductById,
  saveProduct,
  deleteProductById,
} from "../models/product.model.js";

const getAll = async () => {
  return await getAllProducts();
};
const createProduct = async (product) => {
  return await saveProduct(product);
};
const getProduct = async (id) => {
  return await getProductById(id);
};
const deleteProduct = async (id) => {
  return await deleteProductById(id);
};

export default { getAll, createProduct, getProduct, deleteProduct };
