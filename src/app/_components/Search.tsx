'use client'

import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci';

interface SearchProps {
    placeholder?: string;
    name?: string;
    onChange?: (value: any) => void;
}

const Search = ({ placeholder = 'Search products ...', onChange, name }: SearchProps) => {
    const [inputValue, setInputValue] = useState('');
    const [debouncedValue, setDebouncedValue] = useState(inputValue);
    const [showSuggestions, setShowSuggestions] = useState(false);

    // Update debounced value after a delay
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(inputValue);
        }, 500); // Adjust the delay as needed

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
        "test1", "test2", "test3", "test4", "test4"
    ];

    const filteredSuggestItems = searchItems.filter((data) =>
        data.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        setShowSuggestions(true);
    };

    const handleSuggestionClick = (suggestion: string) => {
        setInputValue(suggestion);
        setShowSuggestions(false);
    };

    return (
        <div className='hidden lg:flex md:hidden h-[45px] w-[300px] bg-neutral-100 rounded-full flex-row items-center gap-1 px-2 relative'>
            <input
                type="text"
                onChange={handleInputChange}
                className='w-full h-full bg-neutral-100 text-black text-sm pl-3 rounded-full'
                placeholder={placeholder}
                name={name}
                value={inputValue}
            />
            <div className='flex items-center justify-center w-[40px] h-[30px] rounded-full bg-black cursor-pointer text-white'>
                <CiSearch size={20} />
            </div>

            {inputValue && showSuggestions && filteredSuggestItems.length > 0 && (
                <div className='absolute left-0 top-[50px] bg-white border shadow-xl w-full max-h-[200px] rounded-[10px] p-3 flex flex-col overflow-y-auto'>
                    {filteredSuggestItems.map((si, i) => (
                        <div
                            key={i}
                            onClick={() => handleSuggestionClick(si)}
                            className='w-full p-2 rounded-[5px] text-sm hover:bg-neutral-100 hover:font-bold cursor-pointer'
                        >
                            {si}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Search;
