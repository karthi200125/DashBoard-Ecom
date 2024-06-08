import React, { useState } from 'react';
import { colors } from './dummydata';

interface ColorProps {
    onColorSelect: (color: string) => void;
}

const Colors = ({ onColorSelect }: ColorProps) => {
    const [selectedColor, setSelectedColor] = useState<string>('');

    return (
        <div className="flex flex-wrap justify-between items-center">
            {colors.map((color, index) => (
                <div
                    key={color} // Use a unique identifier as key
                    className="rounded-full w-[25px] h-[25px] bg-white flex items-center justify-center cursor-pointer"
                    style={{
                        border: color === selectedColor ? '1px solid black' : 'none',
                    }}
                    onClick={() => { setSelectedColor(color); onColorSelect(color); }}
                >
                    <div
                        className="rounded-full w-[20px] h-[20px]"
                        style={{ background: color }}
                    ></div>
                </div>
            ))}
        </div>
    );
};

export default Colors;
