import React, { useState } from 'react';
import { colors } from './dummydata';

interface ColorProps {
    onColorSelect: (color: string) => void;
    roundSize?: string;
}

const Colors = ({ onColorSelect, roundSize }: ColorProps) => {
    const [selectedColor, setSelectedColor] = useState<string>('');

    return (
        <div className="flex flex-wrap gap-2 items-center">
            {colors.map((color, index) => (
                <div
                    key={color} 
                    className={`w-[30px] h-[30px] rounded-full flex items-center justify-center cursor-pointer ${color === selectedColor && "border"}`}
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
