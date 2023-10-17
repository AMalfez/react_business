import React, { useState } from "react";
import "../css/AddProduct.css";
import ProductEdit from "./Modal/ProductEdit";
import Login from "./Login";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "./Logout";

function AddProduct() {
  const [modal, setModal] = useState(false);
  const {isAuthenticated} = useAuth0();

  const showModal = () => {
    if (modal) setModal(false);
    else setModal(true);
  };
  return (
    <div className="addprod-container">
      {!isAuthenticated?(<Login />):(<Logout/>)}
      <button onClick={showModal}>Add Product</button>
      <ProductEdit show={modal} showModal={showModal} />
    </div>
  );
}

export default AddProduct;
