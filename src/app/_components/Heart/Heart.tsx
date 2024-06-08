'use client'
import React, { useState } from 'react';
import './Heart.scss';

const Heart = () => {
    const [isAnimated, setIsAnimated] = useState(false);

    const handleClick = () => {
        setIsAnimated(!isAnimated);
    };

    return (
        <div>
            <div
                className={`HeartAnimation ${isAnimated ? 'animate' : ''}`}
                onClick={handleClick}
            ></div>
        </div>
    );
}

export default Heart;
