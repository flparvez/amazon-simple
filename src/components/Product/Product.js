import React from 'react';
import { Link } from "react-router-dom";


import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Product = (props) => {
    const {img,name,seller,price,stock,key}=props.product;

    
    return (
    <div className='product'>
        <div className='product-left'>
            <img src={img} alt="" />

        </div>
        <div className='product-right'>
        <h4 className='product-name'> <Link to={"/product/"+ key}>{name}</Link> </h4>
        <br />
        <p><small>By: {seller}</small></p>
        <p style={{fontWeight:"bold"}}>${price}</p>
        <br />
        <p>Only {stock} left in stock - order soon</p>

        { props.showAddToCart=== true && <button className='main-button' onClick={()=>props.handleAddProduct(props.product)}>
             <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>
}

        </div>
        
        
    </div>
    );
};

export default Product;