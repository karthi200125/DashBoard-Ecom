import React, { useState } from 'react';
import { sizes } from './dummydata';

interface SizeProps {
    onSizeSelect: (size: string) => void;
    alreadySize?: string[];
    type?: string;
}

const Sizes = ({ onSizeSelect, alreadySize , type }: SizeProps) => {
    const [selectedSize, setSelectedSize] = useState<string | null>( null);
    const sizesArray = alreadySize ? alreadySize : sizes;
    
    const handleSizeSelect = (size: string) => {
        if (type === "cartitem") {            
            if (selectedSize === size) {            
                setSelectedSize(null);
                onSizeSelect(''); 
            } else {            
                setSelectedSize(size);
                onSizeSelect(size); 
            }
        } else {
            if (selectedSize === size) {            
                setSelectedSize(null);
                onSizeSelect(''); 
            } else {            
                setSelectedSize(size);
                onSizeSelect(size); 
            }
        }
    };

    return (
        <div className='flex flex-wrap items-center gap-2'>
            {sizesArray?.map((size, index) => (
                <div
                    key={index}
                    className={`rounded-[10px] border w-[50px] h-[50px] flex items-center justify-center cursor-pointer ${selectedSize === size ? "bg-black text-white border-none" : "bg-white"}`}
                    onClick={() => handleSizeSelect(size)}
                >
                    {size}
                </div>
            ))}
        </div>
    );
};

export default Sizes;
