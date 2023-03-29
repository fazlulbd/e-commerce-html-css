import React from 'react';
import './Style.css';

const Product = (props) => {
    // console.log(props);
    const {img, name, seller, price, stock}= props.product;
    return (
        <div className='product'>
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-text">
                <h4>{name}</h4>
                <p>by: <strong>{seller}</strong> </p>
                <h3>${price}</h3>
                <p><small>only <strong>{stock}</strong> left in stock order soon</small></p>
                <button className='btn' onClick={()=>props.handleClick(props.product)}> Add to cart</button>
            </div>
        </div>
    );
};

export default Product;