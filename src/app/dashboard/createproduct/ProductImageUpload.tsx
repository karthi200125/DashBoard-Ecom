'use client';
import CustomBtn from '@/app/_components/CustomBtn';
import ProgressBarCon from '@/app/_components/ProgressBar';
import Image from '@/components/ui/CustomImage';
import { ChangeEvent, useState } from 'react';
import { IoCloudUploadOutline } from 'react-icons/io5';

const ProductImageUpload = () => {
    const [productImage, setProductImage] = useState<string | null>(null);
    const imguplaod = true;

    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setProductImage(URL.createObjectURL(e.target.files[0]));
        }
    };

    const addedImages: string[] = [
        "",
        "",
        "",
    ]

    const per = 20

    const imageper = 100 - per

    return (
        <div className="bg-white border rounded-[20px] p-5 h-full flex flex-row gap-10 justify-between items-center min-h-[200px]">

            <div className='flex flex-row items-center gap-10 h-full flex-1 '>
                <input type="file" accept="image/*" className="hidden" id="imageupload" onChange={handleImageUpload} />

                <label htmlFor="imageupload" className='h-[300px] w-[400px] relative overflow-hidden rounded-[10px]'>
                    <div className={`absolute bottom-0 left-0 w-full `} style={{ height: `${imageper}%` }}>
                        <div className="wave wave1 h-[20%]"></div>
                        <div className='w-full h-[100%] bg-[rgba(0,0,0,0.8)] '></div>
                    </div>
                    <Image src={productImage || ''} imgclass="w-full h-full bg-neutral-200 rounded-[10px]" alt=''/>
                </label>
            </div>

            <div className='flex flex-wrap items-center justify-between w-[320px] gap-3'>
                <Image src={addedImages[0] || ''} imgclass="rounded-[10px] w-[150px] h-[150px] bg-neutral-200" alt=''/>
                <Image src={addedImages[1] || ''} imgclass="rounded-[10px] w-[150px] h-[150px] bg-neutral-200" alt=''/>
                <Image src={addedImages[2] || ''} imgclass="rounded-[10px] w-[150px] h-[150px] bg-neutral-200" alt=''/>
                <Image src={addedImages[3] || ''} imgclass="rounded-[10px] w-[150px] h-[150px] bg-neutral-200" alt=''/>
            </div>


            <div className="flex flex-col gap-5 w-[440px] h-[300px]">
                <label className="font-bold text-lg">Upload Product Images</label>
                <p className='text-sm text-neutral-400'>You can add upto 4 pictures</p>
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
                    <ProgressBarCon per={per} />
                )}
                {addedImages?.length > 0 &&
                    <span className='font-bold'>{addedImages?.length} of 4 Images Uploaded</span>
                }
            </div>

        </div>
    );
};

export default ProductImageUpload;
