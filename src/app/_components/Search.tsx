'use client'

import { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';

interface SearchProps {
    placeholder?: string,
    name?: string,
    onChange?: (value: any) => void;
}

const Search = ({ placeholder, onChange, name }: SearchProps) => {
    const [inputValue, setInputValue] = useState('');
    const [debouncedValue, setDebouncedValue] = useState(inputValue);

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

    return (
        <div className="min-w-[400px] rounded-[8px] bg-neutral-100 flex flex-row items-center px-2">
            <CiSearch size={25} />
            <input
                type="text"
                name={name}
                className="w-full rounded-[8px] p-[10px] bg-neutral-100 placeholder:text-sm"
                placeholder={placeholder}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </div>
    );
};

export default Search;