import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className='Header'>
            <img src={logo} alt="" />

                <nav>

                    <a href="/shop">Shop</a>
                    <a href="/review">Review</a>
                    <a href="/manage">Mange Inventory</a>
                </nav>
        </div>
    );
};

export default Header;