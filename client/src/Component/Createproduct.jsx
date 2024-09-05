import React, { useState } from "react";
import "./CreateProduct.css";

const CreateProduct = ({ handlePost }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    const product = {
      name,
      imageUrl,
      price,
      description,
    };
    handlePost(product);
  };

  return (
    <div className="create-product-container">
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="url"
        placeholder="Enter image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default CreateProduct;
