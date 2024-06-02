'use client';
import CustomBtn from '@/app/_components/CustomBtn';
import ProgressBarCon from '@/app/_components/ProgressBar';
import Image from '@/components/ui/Image';
import React, { useState, ChangeEvent } from 'react';
import { IoCloudUploadOutline } from 'react-icons/io5';
import test from '../../assets/user-bg.jpg'

const ProductImageUpload = () => {
    const [productImage, setProductImage] = useState<string | null>(null);
    const imguplaod = true;

    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setProductImage(URL.createObjectURL(e.target.files[0]));
        }
    };

    return (
        <div className="bg-white border rounded-[20px] p-5 h-full flex-1 flex flex-col gap-2 ">

            <div className='flex flex-row items-center gap-10 h-[200px]'>
                <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="imageupload"
                    onChange={handleImageUpload}
                />
                <label htmlFor="imageupload" className='h-[200px] w-[260px] '>
                    {productImage ? (
                        <Image src={productImage} imgclass="rounded-[10px] w-full h-full" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center border rounded-[10px]">
                            <span>No image selected</span>
                        </div>
                    )}
                </label>
                <div className="flex flex-col gap-3 flex-1 h-full">
                    <label className="font-bold">Upload Product Image</label>
                    <label
                        htmlFor="imageupload"
                        className="flex flex-row gap-3 items-center justify-center border p-3 rounded-[10px] cursor-pointer hover:bg-neutral-100 w-full"
                    >
                        <IoCloudUploadOutline size={25} />
                        <h2>Select image</h2>
                    </label>

                    {!imguplaod ? (
                        <CustomBtn btnCls="bg-blue-400 p-5">Upload Image</CustomBtn>
                    ) : (
                        <ProgressBarCon per={90} />
                    )}
                </div>
            </div>

            <div className='flex flex-row items-center justify-between'>
                <Image src={""} imgclass="rounded-[10px] w-[100px] h-[100px] bg-neutral-200" />
                <Image src={""} imgclass="rounded-[10px] w-[100px] h-[100px] bg-neutral-200" />
                <Image src={""} imgclass="rounded-[10px] w-[100px] h-[100px] bg-neutral-200" />
                <Image src={""} imgclass="rounded-[10px] w-[100px] h-[100px] bg-neutral-200" />
                <Image src={""} imgclass="rounded-[10px] w-[100px] h-[100px] bg-neutral-200" />
            </div>

        </div>
    );
};

export default ProductImageUpload;
