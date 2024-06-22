'use client'
import Image from '@/components/ui/CustomImage'
import React, { useState } from 'react'
import { IoCloudUploadOutline } from 'react-icons/io5';

const EditProfileImgUpload = () => {

    const [productImage, setProductImage] = useState<string | null>(null);
    const imguplaod = true;

    const handleImageUpload = (e: any) => {
        if (e.target.files && e.target.files[0]) {
            setProductImage(URL.createObjectURL(e.target.files[0]));
        }
    };

    const per = 30

    const imageper = 100 - per

    return (
        <div className='w-full flex flex-col gap-3'>
            <h2>Profile Image</h2>
            <div className='flex flex-row items-center gap-10 h-full flex-1 '>
                <input type="file" accept="image/*" className="hidden" id="imageupload" onChange={handleImageUpload} />

                <label htmlFor="imageupload" className='h-[200px] w-[300px] relative overflow-hidden rounded-[10px]'>
                    <div className={`absolute bottom-0 left-0 w-full `} style={{ height: `${imageper}%` }}>
                        <div className={`${per > 10 && "wave wave1 h-[20%]"}`}></div>
                        <div className='w-full h-[100%] bg-[rgba(0,0,0,0.8)] '></div>
                    </div>
                    <Image src={productImage || ''} imgclass="w-[300px] h-[200px] bg-neutral-200 rounded-[10px] " alt='ProfileImage'/>
                </label>
            </div>
            <label
                htmlFor="imageupload"
                className="flex flex-row gap-3 items-center justify-center border p-3 rounded-[10px] cursor-pointer hover:bg-neutral-100 w-full"
            >
                <IoCloudUploadOutline size={25} />
                <h2>Select image</h2>
            </label>
        </div>
    )
}

export default EditProfileImgUpload