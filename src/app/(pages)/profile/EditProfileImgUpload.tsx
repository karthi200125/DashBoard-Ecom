'use client';
import CustomBtn from '@/app/_components/CustomBtn';
import ProgressBarCon from '@/app/_components/ProgressBar';
import { useUpload } from '@/app/hooks/UplaodFile';
import Image from '@/components/ui/CustomImage';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { IoCloudUploadOutline } from 'react-icons/io5';

interface ProfileImageUploadProps {
    user: any;
    onDownloadUrl: (url: string) => void;
}

const EditProfileImgUpload: React.FC<ProfileImageUploadProps> = ({ user, onDownloadUrl }) => {
    const [file, setFile] = useState<File | null>(null);
    const [productImage, setProductImage] = useState<string | null>(null);

    const { per, UploadFile, downloadUrl } = useUpload({ file });

    const handleUpload = useCallback(() => {
        if (file) {
            UploadFile();
        }
    }, [file, UploadFile]);

    useEffect(() => {
        if (downloadUrl) {
            setFile(null);
            onDownloadUrl(downloadUrl);
        }
    }, [downloadUrl, onDownloadUrl]);

    const handleImageUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setProductImage(URL.createObjectURL(e.target.files[0]));
            setFile(e.target.files[0]);
        }
    }, []);

    const percentage = useMemo(() => Number(per), [per]);
    const imagePer = useMemo(() => 100 - percentage, [percentage]);

    return (
        <div className='w-full flex flex-col gap-3'>
            <h5>Profile Image</h5>
            <div className='flex flex-col gap-3'>
                <div className='flex flex-row items-center gap-10 h-full flex-1'>
                    <input type="file" accept="image/*" className="hidden" id="imageupload" onChange={handleImageUpload} />

                    <label htmlFor="imageupload" className='h-[200px] w-[300px] relative overflow-hidden rounded-[10px]'>
                        <div className={`absolute bottom-0 left-0 w-full`} style={{ height: `${imagePer}%` }}>
                            {percentage > 10 && <div className="wave wave1 h-[20%]" />}
                            <div className='w-full h-[100%] bg-[rgba(0,0,0,0.8)]'></div>
                        </div>
                        <Image src={productImage ? productImage : (user?.image ? user.image : "")} imgclass="w-[300px] h-[200px] bg-neutral-200 rounded-[10px]" alt='ProfileImage' />
                    </label>
                </div>
                {productImage ?
                    <div className='flex flex-col w-full gap-1'>
                        <CustomBtn onClick={handleUpload} btnCls='bg-blue-400 text-white'>Upload Image</CustomBtn>
                        {per && <ProgressBarCon per={percentage} />}
                    </div>
                    :
                    <label
                        htmlFor="imageupload"
                        className="flex flex-row gap-3 items-center justify-center border p-3 rounded-[10px] cursor-pointer hover:bg-neutral-100 w-full"
                    >
                        <IoCloudUploadOutline size={25} />
                        <h5>Select image</h5>
                    </label>
                }
            </div>
        </div>
    );
};

export default EditProfileImgUpload;
