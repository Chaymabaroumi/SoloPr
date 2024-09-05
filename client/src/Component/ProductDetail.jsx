import axios from "axios";
import React, { useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import "./Product.css";
import { FiEdit, FiTrash } from "react-icons/fi";
const AddCart = (obj) => {
  const [data, setData] = useState([]);
  axios
    .post("http://localhost:5000/add", obj)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

// const detail = async (id) => {
//   try {
//     const response = await axios.get(`http://localhost:5000/api/get/${id}`);
//     // setData(response.data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };

const ProductDetail = ({ e, changeView, handleDelete, handleUpdate }) => {
  return (
    <div className="product-card">
      <h1
        className="product-title"
        onClick={() => {
          changeView("one", e);
        }}
      >
        {e.name}
      </h1>
      <img className="product-image" src={e.imageUrl} alt={e.name} />
      <h1 className="product-price">{e.price}</h1>
      <h1 className="product-description">{e.description}</h1>
      <button className="btn">Add to basket</button>
      <BsCartPlus className="card" onClick={() => {}} />
      <FiEdit className="icon update-icon" onClick={() => handleUpdate(e.id)} />
      <FiTrash
        className="icon delete-icon"
        onClick={() => {
          // console.log(e);
          handleDelete(e.ProductId);
        }}
      />
    </div>
  );
};

export default ProductDetail;
