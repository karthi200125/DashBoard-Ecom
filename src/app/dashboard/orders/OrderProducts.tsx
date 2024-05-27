'use client';
import UserProfile from '@/app/_components/UserProfile';
import React, { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

const OrderProducts = ({ orderproducts }: any) => {
    const [AllProducts, setAllProducts] = useState(false);

    const oplength = orderproducts?.products?.length;
    const product = orderproducts?.products;

    return (
        <div className="">
            <div className="flex flex-row items-center justify-between w-[100px]">
                <div className="productcollections">
                    {product && product.length > 0 && (
                        <UserProfile proSrc={product[0].productImage} profileCls={`pro1 collection bg-neutral-200`} />
                    )}
                    {oplength >= 2 && (
                        <UserProfile proSrc={product[1].productImage} profileCls={`pro2 collection bg-neutral-200`} />
                    )}
                    {oplength >= 3 && (
                        <UserProfile proSrc={product[2].productImage} profileCls={`pro3 collection bg-neutral-200`} />
                    )}
                    {oplength >= 4 && <div className='absolute left-[70px] bottom-0 text-md'>...</div>}
                </div>
                <MdKeyboardArrowRight
                    onClick={() => setAllProducts(!AllProducts)}
                    className={`${AllProducts ? 'rotate-90' : ''} transition duration-300 cursor-pointer`}
                />
            </div>

            {/* open close */}
            {AllProducts && (
                <div className="absolute w-[200px] z-10 min-h-[50px] bg-white border rounded-[10px] p-3 flex flex-col gap-2 shadow-xl overflow-hidden">
                    {orderproducts?.products?.map((op: any, i: number) => (
                        <div className="flex flex-row items-center gap-3" key={i}>
                            <UserProfile proAlt={op?.productName} proSrc={op?.productImage} profileCls="w-8 h-8 bg-neutral-200" />
                            <h1 className="text-sm capitalize">{op?.productName}</h1>
                            {/* <p className='text-neutral-400'>{`${1000} RS`}</p> */}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default OrderProducts;
