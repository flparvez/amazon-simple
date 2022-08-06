import React from 'react';
import './ReviewItem.css';
const ReviewItem = (props) => {
    const {name,quantity,key,price}=props.product;
    return (
        <div className='review-item'>
            <h4>Review Item</h4>
            <h4 className='product-name'>{name}</h4>
            <h4>Quantity: {quantity}</h4>
            <p>Single Product: ${price}</p>
            <p>Full Price: ${price* quantity}</p>
            <br />
            <button onClick={()=> props.removeProduct(key)} className='main-button' >Remove</button>
            
        </div>
    );
};

export default ReviewItem;