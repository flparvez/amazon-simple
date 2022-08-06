import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Carts from '../Cart/Carts';
import './Review.css'
import ReviewItem from '../ReviewItem/ReviewItem';
import HappyImage from '../../images/giphy.gif';



const Review = () => {

    const [cart, setCart] = useState([]);
    const [orderPlaced, setorderPlaced] = useState(false);
    const removeProduct=(productKey) =>{

        const newCart= cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }


        useEffect(()=>{

            
            const savedCart=getDatabaseCart();
            const productKeys=Object.keys(savedCart);

            const cartProduct= productKeys.map(key => {
                const product=fakeData.find(pd => pd.key===key);

                product.quantity=savedCart[key];

                return(product);

            });
            setCart(cartProduct);

        })


const handlePlaceOrder=()=>{
    setCart([]);
    setorderPlaced(true);
    
    processOrder();

}



        let thankYou;
        if (orderPlaced) {
           thankYou= <img src={HappyImage} alt="" />
        }
    return (
        <div className='twin-conatiner'>
           
           <div className='product-container'>

            
           {
                cart.map(pd=> <ReviewItem
                    key={pd.key}
                    removeProduct={removeProduct}
                    product={pd} > </ReviewItem>)
            }
            {thankYou}
           </div>
           <div className="cart-container">
            <Carts cart={cart}>
            
                        <button onClick={handlePlaceOrder} className="main-button">Place Order</button>
    
            </Carts>

           </div>
           
           
        </div>
    );
};

export default Review;