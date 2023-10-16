import React, { useContext, useState } from 'react'
import ReactDOM from 'react-dom';
import '../../css/modal/ProductEdit.css'
import EditProd from '../../context/editProd';

function ProductEdit({show, showModal}) {
    const [id, setId] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState('');
    const {concateNewProduct} = useContext(EditProd);

    if(!show) return null;
  return ReactDOM.createPortal(
    <div className='edit-modal'>
        <div className='edit_container'>
            <div className='edit_img'>Upload</div>
            <div className='prod-info'>
                <p>Add new Product</p>
                <input id='id' placeholder='Product Id' onChange={(e)=> setId(e.target.value)}/>
                <input id='name' placeholder='Product Name' onChange={(e)=> setName(e.target.value)}/>
                <input id='customer_name' placeholder='Customer Name' onChange={(e)=> setCustomerName(e.target.value)}/>
                <input id='customer_email' placeholder='Customer Email' onChange={(e)=> setCustomerEmail(e.target.value)}/>
                <input id='quantity' placeholder='Quantity' onChange={(e)=> setQuantity(e.target.value)}/>
                <button className='edited_prod' onClick={()=> {
                    concateNewProduct({"id":`${id}`,"customer_name":`${customerName}`, "customer_email":`${customerEmail}`,"product":`${name}`,"quantity":`${quantity}`});
                    showModal()
                }}>Save</button>
            </div>
        </div>
        <div className='edit-wrapper' onClick={showModal}></div>
    </div>,
    document.getElementById('edit')
  )
}

export default ProductEdit