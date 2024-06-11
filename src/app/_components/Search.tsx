'use client'

import Image from '@/components/ui/Image';
import React, { useEffect, useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { IoIosClose } from 'react-icons/io'
import { productsdata } from '../dashboard/products/page';

interface SearchProps {
    placeholder?: string;
    name?: string;
    onChange?: (value: any) => void;
    searchCls?: string
}

const Search = ({ placeholder = 'Search products ...', onChange, name, searchCls }: SearchProps) => {
    const [inputValue, setInputValue] = useState('');
    const [debouncedValue, setDebouncedValue] = useState(inputValue);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [searchExpand, setSearchExpand] = useState(false);

    // Update debounced value after a delay
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(inputValue);
        }, 500);

        // Cleanup the timeout if the value changes before delay
        return () => {
            clearTimeout(handler);
        };
    }, [inputValue]);

    // Call the onChange handler with the debounced value
    useEffect(() => {
        if (onChange) {
            onChange(debouncedValue);
        }
    }, [debouncedValue, onChange]);

    const searchItems = [
        "test1", "test2", "test3", "test4", "test5"
    ];

    const filteredSuggestItems = productsdata.filter((data) =>
        data.proName.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        setShowSuggestions(true);
    };

    const handleSuggestionClick = (suggestion: string) => {
        setInputValue(suggestion);
        setShowSuggestions(false);
    };

    const handleSearchToggle = () => {
        if (searchExpand) {
            setInputValue('');
            setShowSuggestions(false);
        }
        setSearchExpand(!searchExpand);
    }

    return (
        <div className={`hidden lg:flex md:hidden h-full items-center transform-transition transition-all ease-in-out duration-500 ${searchExpand ? "absolute left-0 w-full z-[9999] rounded-full border" : "relative"} ${searchCls}`}>
            {searchExpand && (
                <input
                    type="text"
                    onChange={handleInputChange}
                    className='w-full h-full text-black font-bold capitalize text-lg pl-5 rounded-full z-[9999] placeholder:text-md transition-all ease-in-out duration-500 transform-transition'
                    placeholder={placeholder}
                    name={name}
                    value={inputValue}
                />
            )}
            <div
                className={`${searchExpand ? "absolute right-3 rounded-full" : "rounded-[10px]"} z-[9999] flex items-center justify-center w-[40px] h-[40px] cursor-pointer border bg-white`}
                onClick={handleSearchToggle}
            >
                {searchExpand ? <IoIosClose size={20} /> : <FiSearch size={20} />}
            </div>

            {inputValue && showSuggestions && filteredSuggestItems.length > 0 && (
                <div className='absolute left-0 top-[70px] bg-white border shadow-xl w-full max-h-[500px] rounded-[10px] p-3 flex flex-col overflow-y-auto'>
                    {filteredSuggestItems.map((si: any, i) => (
                        <div
                            key={i}
                            onClick={() => handleSuggestionClick(si)}
                            className='w-full p-2 rounded-[5px] text-sm hover:bg-neutral-100 cursor-pointer flex flex-row items-center gap-3'
                        >
                            <Image src={si.proImage} imgclass='bg-neutral-200 w-[60px] h-[60px] rounded-[5px]' />
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-md font-bold capitalize line-clamp-1'>{si.proName}</h1>
                                <p className='text-sm text-neutral-400 line-clamp-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, repellendus?</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Search;
