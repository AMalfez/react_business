import React, { useState } from "react";
import "../css/Product.css";
import Edit from './Modal/Edit'

function Product(prop) {
  const [show, setShow] = useState(false);
  const [name,setName] = useState(prop.name);
  const [prodName,setProdName] = useState(prop.prodName);
  const [quantity,setQuantity] = useState(prop.quantity);
  const [email,setEmail] = useState(prop.email);
  
  const closeModal=()=>{
    if(show) setShow(false);
    else setShow(true);
  }
  const editProduct=({prodName,name,email,quantity})=>{
    setEmail(email);
    setName(name);
    setProdName(prodName);
    setQuantity(quantity);
  }
  return (
    <>
      <div className="product-container">
        <div className="product-img">
          <p>Product Image</p>
        </div>
        <div className="prod">
          <div className="prod-info">
            <p className="prod-name">{prodName}</p>
            <p className="prod-customer">
              <span className="name">
                <span>Customer name:</span>
                {name}
              </span>
            </p>
            <p className="prod-quantity">
              <span className="quantity">
                <span>Quantity:</span>
                {quantity}
              </span>
            </p>
            <p className="prod-customer-email">
              <span>Customer email:</span>
              {email}
            </p>
          </div>
          <div className="edit_prod">
            <button className="edit" onClick={()=>{
              closeModal()
            }}>Edit</button>
            <button className="delete" onClick={() => prop.deleteProduct(prop.id)}>
              Delete
            </button>
          </div>
          <Edit/>
        </div>
      </div>
      <Edit show={show} showModal={closeModal} id={prop.id} editProduct={editProduct}/>
    </>
  );
}

export default Product;
