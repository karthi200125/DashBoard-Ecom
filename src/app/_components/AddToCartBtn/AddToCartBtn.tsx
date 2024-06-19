'use client';

import React, { useState } from 'react';
import './AddToCartBtn.scss';
import { MdShoppingCart } from "react-icons/md";
import { FaParachuteBox } from "react-icons/fa";

const AddToCartBtn = () => {
    const [clicked, setClicked] = useState(false);

    const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation(); // Prevent propagation
        setClicked(true);
        setTimeout(() => {
            setClicked(false);
        }, 3000);
    };

    return (
        <button className={`cart-button border px-2 pl-5 rounded-full ${clicked ? 'clicked' : ''}`} onClick={handleAddToCart}>
            <div className={`add-to-cart flex flex-row items-center justify-center gap-3 ${clicked && "opacity-0"}`}>
                <h3>Add to Cart</h3>
                <div className='w-[40px] h-[40px] rounded-full bg-blue-400 flex items-center justify-center text-white'>
                    <MdShoppingCart size={20} />
                </div>
            </div>
            <span className="added w-full h-full flex items-center justify-center text-center text-lg left-0 top-0">Added</span>
            <MdShoppingCart className="fas fa-shopping-cart" />
            <FaParachuteBox className="fas fa-box" />
        </button>
    );
};

export default AddToCartBtn;
