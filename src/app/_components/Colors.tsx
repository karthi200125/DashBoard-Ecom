import React, { useState } from 'react';
import { colors } from './dummydata';

interface ColorProps {
    onColorSelect: (color: string) => void;
    alreadyColor?: string[];
}

const Colors = ({ onColorSelect, alreadyColor }: ColorProps) => {
    const [selectedColors, setSelectedColors] = useState<string[]>([]);    
    const colorsArray = alreadyColor ? alreadyColor : colors;

    const toggleColor = (color: string) => {
        const isSelected = selectedColors.includes(color);
        if (isSelected) {
            setSelectedColors(selectedColors.filter(c => c !== color));
            onColorSelect(selectedColors);
        } else {
            setSelectedColors([...selectedColors, color]);
            onColorSelect(selectedColors);
        }
    };

    
    return (
        <div className="flex flex-wrap items-center">
            {colorsArray.map((color, index) => (
                <div
                    key={color}
                    className={`w-[35px] h-[35px] rounded-full flex items-center justify-center cursor-pointer ${selectedColors?.includes(color) && "border"}`}
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
