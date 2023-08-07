import axios from "axios";

const createProduct = (cateName) => {
  const rep = axios
    .post("http://localhost:3000/categories", { categoryName: cateName })
    .then((res) => {
      if (res.status === 201) {
        alert("Add new success!");
      }
    });
  return rep;
};

const getProduct = () => {
  const rep = axios.get("http://localhost:3000/" + "categories");
  return rep;
};

export { createProduct, getProduct };
