import React, { useState } from 'react'
import '../css/AddProduct.css'
import ProductEdit from './Modal/ProductEdit'

function AddProduct() {
  const [modal, setModal] = useState(false);
  
  const showModal=()=>{
    if(modal) setModal(false);
    else setModal(true);
  }
  return (
    <div className='addprod-container'>
        <button onClick={showModal}>Add Product</button>
        <ProductEdit show={modal} showModal={showModal}/>
    </div>
  )
}

export default AddProduct