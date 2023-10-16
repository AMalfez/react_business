import React, { useState } from "react";
import "../css/Dashboard.css";
import Product from "./Product";
import AddProduct from "./AddProduct";
import DummyData from "../assets/DummyData.json";
import EditProd from "../context/editProd";

function AddProd() {
  const [data, setData] = useState([...DummyData]);
  const concateNewProduct = (prod) => {
    console.log(prod);
    setData([...data, prod]);
  };
  const deleteProduct = (id) => {
    const delted = data.filter((elem) => elem.id != id);
    setData([...delted]);
  };
  return (
    <div className="add-product">
      <EditProd.Provider value={{ concateNewProduct }}>
        <AddProduct />
      </EditProd.Provider>
      {data.map((data) => (
        <Product
          key={data.id}
          prodName={data.product}
          id={data.id}
          name={data.customer_name}
          email={data.customer_email}
          quatity={data.quantity}
          deleteProduct={deleteProduct}
        />
      ))}
    </div>
  );
}

export default AddProd;
