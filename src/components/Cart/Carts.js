import React from 'react';

import './Cart.css';
const Carts = (props) => {
    const cart=props.cart;

    // const total =cart.reduce((total,prd )=> total+ prd.price,0);

    let total=0;
    
    for(let i=0; i< cart.length; i++){
        const product=cart[i];
        const productPrice= product.price;

        const productFullprice=productPrice*product.quantity;

        total = total + productFullprice;
        
    }

    let shipping= 0;
    if (total > 85) {
        shipping=0;
    }

    else if (total> 15) {
        shipping=5.99;
    }else if(total >0){
        shipping=12.99;
    }

    const tax= total/10;
    const finalPrice=total +shipping + Number(tax);

    const formatNumber = num => {
        const precision=num.toFixed(2);
        return Number(precision);
    }


   return(
    <div className='container'>
        <h3>Order Summary</h3>
        <h4>Items Ordered:{cart.length}</h4>
        <h4>Product Price:{formatNumber(total)}</h4>
        <h4>Shipping Cost:{formatNumber(shipping)}</h4>
        <h4>Tax + Vat: {formatNumber(tax)}</h4>
        <h4>Total Price:{formatNumber(finalPrice)}</h4>
       
       {
        props.children
       }

    </div>
   );
};

export default Carts;