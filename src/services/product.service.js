//* Services
import { getAllProducts, getProductById, saveProduct, deleteProduct } from "../models/product.model.js";

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
  return await deleteProduct(id);
};

export default { getAll, createProduct, getProduct, deleteProduct };