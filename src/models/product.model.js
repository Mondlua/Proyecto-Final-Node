//* model
import { db } from "../config/db.js";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const productCollection = collection(db, "productos");

//* Methods
export const getAllProducts = async () => {
  try {
    const productList = await getDocs(productCollection);
    const products = [];
    productList.forEach((doc) => products.push({ id: doc.id, ...doc.data() }));

    return products;
  } catch (error) {
    throw new Error("Error", error.message);
  }
};

export const getProductById = async (id) => {
  try {
    const product = await getDoc(doc(productCollection, id));
    return product;
  } catch (error) {
    throw new Error("Error", error.message);
  }
};

export const saveProduct = async (product) => {
  try {
    const newProduct = await addDoc(productCollection, product);
    return newProduct;
  } catch (error) {
    throw new Error("Error", error.message);
  }
};

export const deleteProductById = async (id) => {
  try {
    await deleteDoc(doc(productCollection, id));
  } catch (error) {
    throw new Error("Error", error.message);
  }
};
