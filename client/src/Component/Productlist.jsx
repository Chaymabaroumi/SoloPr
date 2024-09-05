import React from "react";
import Productdetail from "../Component/ProductDetail.jsx";
import "./allProduct.css";
const Productlist = ({ data, changeView, handleUpdate, handleDelete }) => {
  return (
    <div className="product-container">
      {data.map((e, key) => {
        return (
          <Productdetail
            e={e}
            key={key}
            changeView={changeView}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};
export default Productlist;
