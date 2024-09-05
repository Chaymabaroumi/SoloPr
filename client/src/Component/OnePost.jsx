import React from "react";

const OnePost = ({ obj }) => {
  return (
    <div className="product-card">
      <h1 className="product-title">{obj.name}</h1>
      <img className="product-image" src={obj.imageUrl} alt={obj.name} />
      <h1 className="product-price">{obj.price}</h1>
      <h1 className="product-description">{obj.description}</h1>
      <button className="btn">Add to basket</button>
    </div>
  );
};
export default OnePost;
