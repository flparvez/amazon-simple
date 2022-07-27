import React, { useState } from 'react';
import './Shop.css';

import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Carts from '../Cart/Carts';

const Shop = () => {
    const first10=fakeData.slice(0,10);

    const [Products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct =(product) =>{
        
        const newCart= [...cart, product];
        setCart(newCart);
        
    }
  
    return (
            <div className='shop-container'>
                
    <div className="product-container">
    {
                Products.map(product => <Product 
                    handleAddProduct={handleAddProduct} 
                    product={product}> </Product>)
            }
    </div>

            <div className="cart-container">
                <Carts  product={Product} cart={cart}></Carts>
            </div>
            
            </div>
    );
};

export default Shop;