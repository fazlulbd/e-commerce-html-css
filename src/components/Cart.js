import React from 'react';
import './Style.css';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, prd) =>total + prd.price, 0)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
        
    }
    let shipping = 0;
    if(total === 0){
        shipping = 0;
    }
    else if(total <100){
        shipping = 60;
    }
    else if(total >100){
        shipping = 50;
    }
    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h2>Order Summary</h2>
            <p>Items ordered: {cart.length}</p>
            <p>Items price: {formatNumber(total)}</p>
            <p>shipping cost: {formatNumber(shipping)}</p>
            <h5>Total price: {formatNumber(total + shipping)}</h5>
            
        </div>
    );
};

export default Cart;