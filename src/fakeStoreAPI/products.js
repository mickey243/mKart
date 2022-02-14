import Axios from "axios";

// fetch("https://fakestoreapi.com/products").then((res) => res.json());

export const getAllProducts = async () => {
  const response = await Axios.get("https://fakestoreapi.com/products");
  return response;
};

export const getAllCategories = async () => {
  const { data } = await Axios.get(
    "https://fakestoreapi.com/products/categories"
  );
  return data;
};
