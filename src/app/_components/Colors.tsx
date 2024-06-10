import React, { useState } from 'react';
import { colors } from './dummydata';

interface ColorProps {
    onColorSelect: (color: string) => void;
}

const Colors = ({ onColorSelect }: ColorProps) => {
    const [selectedColor, setSelectedColor] = useState<string>('');

    return (
        <div className="flex flex-wrap items-center">
            {colors.map((color, index) => (
                <div
                    key={color}
                    className={`w-[35px] h-[35px] rounded-full flex items-center justify-center cursor-pointer ${color === selectedColor && "border"}`}
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
