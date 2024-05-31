'use client';
import CustomBtn from '@/app/_components/CustomBtn';
import ProgressBarCon from '@/app/_components/ProgressBar';
import Image from '@/components/ui/Image';
import React, { useState, ChangeEvent } from 'react';
import { IoCloudUploadOutline } from 'react-icons/io5';

const ImageUpload = () => {
    const [productImage, setProductImage] = useState<string | null>(null);
    const imguplaod = true;

    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setProductImage(URL.createObjectURL(e.target.files[0]));
        }
    };

    return (
        <div className="bg-white border rounded-[20px] p-5 h-full flex-1 flex flex-row gap-10">
            <input
                type="file"
                accept="image/*"
                className="hidden"
                id="imageupload"
                onChange={handleImageUpload}
            />
            <label htmlFor="imageupload">
                {productImage ? (
                    <Image src={productImage} imgclass="rounded-[10px] w-[260px] h-full" />
                ) : (
                    <div className="w-[260px] h-full flex items-center justify-center border rounded-[10px]">
                        <span>No image selected</span>
                    </div>
                )}
            </label>
            <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-semibold">Upload Product Image</h1>
                <label
                    htmlFor="imageupload"
                    className="flex flex-row gap-3 items-center justify-center border p-5 rounded-[10px] cursor-pointer hover:bg-neutral-100"
                >
                    <IoCloudUploadOutline size={25} />
                    <h2>Select image</h2>
                </label>

                {!imguplaod ? (
                    <CustomBtn btnCls="bg-blue-400 p-5">Upload Image</CustomBtn>
                ) : (
                    <ProgressBarCon per={100} />
                )}
            </div>
        </div>
    );
};

export default ImageUpload;
