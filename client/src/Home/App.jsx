import axios from "axios";
import React, { useEffect, useState } from "react";
import Contact from "../Component/Contact";
import CreateProduct from "../Component/Createproduct";
import OnePost from "../Component/OnePost";
import Productlist from "../Component/Productlist";
import Navbar from "../Nav/Navbar";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [view, setView] = useState("all");
  const [obj, setObj] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const getByName = async (name) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/get/name/${name}`
      );
      setData(response.data);
      console.log("data", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/get");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePost = async (body) => {
    try {
      await axios.post("http://localhost:5000/add", body);
      fetchData();
    } catch (error) {
      console.error("Error adding new product:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/delete/${id}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  const handleUpdate = async (id) => {
    try {
      await axios.put(`http://localhost:5000/update/${id}`);
      fetchData();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const changeView = (v, obj = null) => {
    setView(v);
    setObj(obj);
  };

  const renderView = () => {
    if (view === "all") {
      return (
        <Productlist
          data={data}
          handleDelete={handleDelete}
          changeView={changeView}
          handleUpdate={handleUpdate}
        />
      );
    } else if (view === "createProduct") {
      return (
        <CreateProduct
          handlePost={handlePost}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      );
    } else if (view === "one") {
      return <OnePost obj={obj} />;
    } else if (view === "contact") {
      return <Contact />;
    }
  };

  return (
    <div>
      <Navbar changeView={changeView} getByName={getByName} />

      <div className="contenue">
        <div className="btns">
          <button className="btn" onClick={() => changeView("all")}>
            All Products
          </button>

          <button className="btn" onClick={() => changeView("createProduct")}>
            Create Product
          </button>
        </div>

        {renderView()}
      </div>
    </div>
  );
};

export default App;
