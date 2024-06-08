import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Colors from "@/app/_components/Colors";
import Sizes from "@/app/_components/Sizes";
import { mainCategories } from "@/app/_components/dummydata";

interface FilterProps {
    onColorSelect: (color: string) => void;
    onSizeSelect: (size: string) => void;
    onMinPriceRange: (range: number[]) => void;
    onMaxPriceRange: (range: number[]) => void;
    onCategory: (category: string) => void;
}

const Filter = ({ onColorSelect, onSizeSelect, onMinPriceRange, onMaxPriceRange, onCategory }: FilterProps) => {
    const [cat, setCat] = useState<string>("all");
    const [range, setRange] = useState<number[]>([0, 5000]);

    const handleChanges = (_: Event, newValue: number | number[]) => {
        setRange(newValue as number[]);
        onMinPriceRange(Array.isArray(newValue) ? newValue : [newValue, range[1]]);
        onMaxPriceRange(Array.isArray(newValue) ? newValue : [range[0], newValue]);
    };

    const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newMin = parseInt(event.target.value);
        setRange([newMin, range[1]]);
        onMinPriceRange([newMin, range[1]]);
    };

    const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newMax = parseInt(event.target.value);
        setRange([range[0], newMax]);
        onMaxPriceRange([range[0], newMax]);
    };

    return (
        <div className='w-full max-h-max flex flex-col gap-3 overflow-y-auto'>

            {/* categories */}
            <div className='flex flex-col'>
                <h1 className='w-full text-start border-b-[1px] py-2 text-xl font-bold'>Categories</h1>
                <div className='grid grid-cols-2 gap-2 py-2 '>
                    {mainCategories?.map((c, i) => (
                        <div
                            key={i}
                            className={`py-3 border rounded-[10px] w-full text-center cursor-pointer capitalize ${cat === c ? "bg-black text-white" : "bg-white"}`}
                            onClick={() => { setCat(c); onCategory(c) }}>
                            {c}
                        </div>
                    ))}
                </div>
            </div>

            {/* price range */}
            <div className="flex flex-col gap-2">
                <h1 className='w-full text-start border-b-[1px] py-2 text-xl font-bold'> Price Range </h1>
                {/* <Slider value={range} onChange={handleChanges} valueLabelDisplay="auto" className="w-full mt-2" /> */}
                <div className="flex flex-row items-center gap-5 mt-2">
                    <div className="flex flex-row items-center gap-2">
                        <h2>Min</h2>
                        <input type="number" value={range[0]} onChange={handleMinChange} className="p-2 w-[70px]" />
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <h2>Max</h2>
                        <input type="number" value={range[1]} onChange={handleMaxChange} className="p-2 w-[70px]" />
                    </div>
                </div>
            </div>

            {/* color select */}
            <div className="flex flex-col gap-2">
                <h1 className='w-full text-start border-b-[1px] py-2 text-xl font-bold'> Colors </h1>
                <Colors onColorSelect={onColorSelect} />
            </div>

            {/* sizes select */}
            <div className="flex flex-col gap-2">
                <h1 className='w-full text-start border-b-[1px] py-2 text-xl font-bold'> Sizes </h1>
                <Sizes onSizeSelect={onSizeSelect} />
            </div>

        </div>
    );
};

export default Filter;
