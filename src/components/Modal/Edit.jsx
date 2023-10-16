import React from "react";
import ReactDOM from "react-dom";
import "../../css/modal/Edit.css";
import { useState } from "react";

function Edit({ show, showModal, editProduct }) {
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  if (!show) return null;
  return ReactDOM.createPortal(
    <div className="prodEdit">
      <div className="prodEdit-container">
        <div className="edit_img">Upload</div>
        <div className="prod-info">
          <p>Edit Product</p>
          <input
            id="name"
            placeholder="Product Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            id="customer_name"
            placeholder="Customer Name"
            onChange={(e) => setCustomerName(e.target.value)}
          />
          <input
            id="customer_email"
            placeholder="Customer Email"
            onChange={(e) => setCustomerEmail(e.target.value)}
          />
          <input
            id="quantity"
            placeholder="Quantity"
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button
            className="edited_prod"
            onClick={() => {
              editProduct({
                prodName: name,
                customer_email: customerEmail,
                customer_name: customerName,
                quantity: quantity,
              });
              showModal();
            }}
          >
            Save
          </button>
        </div>
      </div>
      <div className="prodEdit-wrapper" onClick={() => showModal()}></div>
    </div>,
    document.getElementById("prodEdit")
  );
}

export default Edit;
