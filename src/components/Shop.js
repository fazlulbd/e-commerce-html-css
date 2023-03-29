import React, { useState } from 'react';
import fakeData from '../fakeData';
import Cart from './Cart';
import Product from './Product';
import './Style.css';
const Shop = () => {
    const product = fakeData.slice(0, 10);
    const [products, setProduct] = useState(product);
    const [cart, setCart] = useState([])
    const handleClick = (product)=>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='container shoping'>
           <div className="shoping-item">

                {
                    products.map(element =><Product
                        handleClick = {handleClick}
                         product ={element}></Product>)
                }
           </div>
           <div className="shoping-cart">
                <div className="shoping-cart-inner">
                    <Cart cart = {cart}></Cart>
                </div>
           </div>
        </div>
    );
};

export default Shop;