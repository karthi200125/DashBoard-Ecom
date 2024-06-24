import React, { useState } from 'react';
import { colors } from './dummydata';

interface ColorProps {
    onColorSelect: (color: string) => void;
    alreadyColor?: string[];
    type?: string;
}

const Colors = ({ onColorSelect, alreadyColor, type }: ColorProps) => {
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const colorsArray = alreadyColor ? alreadyColor : colors;

    const toggleColor = (color: string) => {
        if (type === "cartitem") {
            if (selectedColor === color) {
                setSelectedColor(null);
                onColorSelect('');
            } else {
                setSelectedColor(color);
                onColorSelect(color);
            }
        } else {
            if (selectedColor === color) {
                setSelectedColor(null);
                onColorSelect('');
            } else {
                setSelectedColor(color);
                onColorSelect(color);
            }
        }
    };

    return (
        <div className="flex flex-wrap items-center">
            {colorsArray?.map((color, index) => (
                <div
                    key={color}
                    className={`w-[35px] h-[35px] rounded-full flex items-center justify-center cursor-pointer 
                        ${selectedColor === color ? "border" : ""}`}
                    onClick={() => toggleColor(color)}
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
