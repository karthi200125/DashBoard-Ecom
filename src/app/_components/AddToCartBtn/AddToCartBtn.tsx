'use client';

import React, { useState } from 'react';
import './AddToCartBtn.scss';
import { MdShoppingCart } from "react-icons/md";
import { FaParachuteBox } from "react-icons/fa";

const AddToCartBtn = () => {
    const [clicked, setClicked] = useState(false);

    const handleAddToCart = () => {
        setClicked(true);
        setTimeout(() => {
            setClicked(false);
        }, 3000);
    };

    return (
        <button className={`cart-button ${clicked ? 'clicked' : ''}`} onClick={handleAddToCart}>
            <span className="add-to-cart">Add to cart</span>
            <span className="added">Added</span>
            <MdShoppingCart className="fas fa-shopping-cart" />
            <FaParachuteBox className="fas fa-box" />
        </button>
    );
};

export default AddToCartBtn;
