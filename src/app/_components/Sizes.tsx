import React, { useState } from 'react';
import { sizes } from './dummydata';

interface SizeProps {
    onSizeSelect: (size: string) => void;
    alreadySize?: string[]
}

const Sizes = ({ onSizeSelect , alreadySize }: SizeProps) => {
    const [selectedSize, setSelectedSize] = useState<string>('');

    const sizesArray = alreadySize ? alreadySize : sizes;

    return (
        <div className='flex flex-wrap items-center gap-2'>
            {sizesArray?.map((size, index) => (
                <div
                    key={index}
                    className={`rounded-[10px] border w-[50px] h-[50px] flex items-center justify-center cursor-pointer ${selectedSize === size ? "bg-black text-white border-none" : "bg-white"}`}
                    onClick={() => { setSelectedSize(size); onSizeSelect(size); }}
                >
                    {size}
                </div>
            ))}
        </div>
    );
};

export default Sizes;
