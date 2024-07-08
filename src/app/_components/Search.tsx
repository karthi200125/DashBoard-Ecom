'use client'

import Image from '@/components/ui/CustomImage';
import React, { useEffect, useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { IoIosClose } from 'react-icons/io'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { getProducts } from '../../../actions/product';
import { toast } from 'sonner';
import Link from 'next/link';
import TransitionLink from '../Animations/TransitionLink';

interface SearchProps {
    placeholder?: string;
    name?: string;
    onChange?: (value: any) => void;
    searchCls?: string;
}

const Search = ({ placeholder = 'Search products ...', onChange, name, searchCls }: SearchProps) => {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();

    const q = searchParams.get('q') || "";

    const [inputValue, setInputValue] = useState(q);
    const [debouncedValue, setDebouncedValue] = useState(q);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [searchExpand, setSearchExpand] = useState(false);
    const [allProducts, setAllProducts] = useState<any[]>([]);

    // Fetch products 
    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getProducts(debouncedValue);
            setAllProducts(products?.data || []);
            if (products.error) toast.error(products.error);
        };

        fetchProducts();
    }, [debouncedValue]);

    // Update debounced value after a delay
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(inputValue);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [inputValue]);

    useEffect(() => {
        if (onChange) {
            onChange(debouncedValue);
        }
    }, [debouncedValue, onChange]);

    const handleInputChange = (e: any) => {
        const value = e.target.value;
        const params = new URLSearchParams(searchParams);

        if (value) {
            params.set('q', value);
        } else {
            params.delete('q');
        }

        replace(`${pathname}?${params.toString()}`);
        setInputValue(value);
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
    };

    return (
        <div className={`flex h-full items-center transform-transition transition-all ease-in-out duration-500 ${searchExpand ? "absolute left-0 w-full z-[9999] rounded-full border" : "relative"} ${searchCls}`}>
            {searchExpand && (
                <input
                    type="text"
                    onChange={handleInputChange}
                    className='w-full h-full text-black font-bold capitalize text-[12px] pl-5 rounded-full z-[9999] placeholder:text-[12px] transition-all ease-in-out duration-500 transform-transition'
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

            {inputValue && showSuggestions && (
                <div className='absolute left-0 top-[70px] bg-white border shadow-xl w-full max-h-[500px] rounded-[10px] p-3 flex flex-col overflow-y-auto'>
                    {allProducts.length > 0 ? (
                        allProducts.map((product, index) => (
                            <TransitionLink href={`/singleproduct/${product.id}`} key={index}>
                                <div
                                    onClick={() => handleSuggestionClick(product.proName)}
                                    className='w-full p-2 rounded-[5px] hover:bg-neutral-100 cursor-pointer flex flex-row items-center gap-3 h-[80px] md:h-[100px] overflow-hidden'
                                >
                                    <Image src={product?.proImage[0]} imgclass='bg-neutral-200 w-[60px] md:w-[100px] h-full rounded-[5px] object-contain' alt='' />
                                    <div className='w-[70%] md:w-[80%] flex flex-col gap-1'>
                                        <h5 className='capitalize line-clamp-1'>{product.proName}</h5>
                                        <p className='line-clamp-1'>{product.proDesc}</p>
                                    </div>
                                </div>
                            </TransitionLink>
                        ))
                    ) : (
                        <div>
                            No products
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Search;
