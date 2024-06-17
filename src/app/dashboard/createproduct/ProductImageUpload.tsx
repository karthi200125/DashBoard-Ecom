'use client';
import CustomBtn from '@/app/_components/CustomBtn';
import ProgressBarCon from '@/app/_components/ProgressBar';
import Image from '@/components/ui/CustomImage';
import { ChangeEvent, useEffect, useState } from 'react';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { useUpload } from '@/app/hooks/UplaodFile';

const ProductImageUpload = () => {
    const [file, setFile] = useState<File | null>(null);
    const [showImage, setShowImage] = useState<string | null>(null);
    const [addedImages, setAddedImages] = useState<string[]>([]);
    const [uploading, setUploading] = useState(false);
    const { per, UploadFile, downloadUrl } = useUpload({ file });

    useEffect(() => {        
        const initialImages: string[] = JSON.parse(localStorage.getItem('addimages') || '[]');
        setAddedImages(initialImages);
    }, []);

    const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);
            setShowImage(URL.createObjectURL(selectedFile));
        }
    };

    const handleUpload = () => {
        if (file) {
            UploadFile();
            setUploading(true);
        }
    };

    useEffect(() => {
        if (downloadUrl) {
            setUploading(false);
            setFile(null);
            setAddedImages(prevImages => {                
                const newImages = [...prevImages, downloadUrl];
                const uniqueImages = Array.from(new Set(newImages)); 
                localStorage.setItem('addimages', JSON.stringify(uniqueImages));
                return uniqueImages;
            });
        }
    }, [downloadUrl]);

    return (
        <div className="bg-white border rounded-[20px] p-5 h-full flex flex-row gap-10 justify-between items-center min-h-[200px]">
            <div className='flex flex-row items-center gap-10 h-full flex-1 '>
                <input type="file" accept="image/*" className="hidden" id="imageupload" onChange={handleImageUpload} />

                <label htmlFor="imageupload" className='h-[300px] w-[400px] relative overflow-hidden rounded-[10px] cursor-pointer'>
                    {showImage &&
                        <div className={`absolute bottom-0 left-0 w-full z-[9999]`} style={{ height: `${per > 15 ? 100 - per : 130}%` }}>
                            <div className="wave wave1 h-[20%]"></div>
                            <div className='w-full h-[100%] bg-[rgba(0,0,0,0.8)] '></div>
                        </div>
                    }
                    <Image src={showImage || ''} imgclass="w-full h-full bg-neutral-200 rounded-[10px]" alt='' />
                </label>
            </div>

            <div className='flex flex-wrap items-center justify-between w-[320px] gap-3'>
                {addedImages?.length > 0 && addedImages.map((imageUrl, index) => (
                    <Image key={index} src={imageUrl} imgclass="rounded-[10px] w-[150px] h-[150px] bg-neutral-200" alt='' />
                ))}
            </div>

            <div className="flex flex-col gap-5 w-[440px] h-[300px]">
                <label className="font-bold text-lg">Upload Product Images</label>
                <p className='text-sm text-neutral-400'>You can add up to 4 pictures</p>
                <label
                    htmlFor="imageupload"
                    className="flex flex-row gap-3 items-center justify-center border p-3 rounded-[10px] cursor-pointer hover:bg-neutral-100 w-full"
                >
                    <IoCloudUploadOutline size={25} />
                    <h2>Select image</h2>
                </label>

                {file && (
                    <CustomBtn btnCls="bg-blue-400 p-5" onClick={handleUpload} isLoading={uploading}>
                        Upload Image
                    </CustomBtn>
                )}

                {per && <ProgressBarCon per={per} />}

                <span className='font-bold'>{addedImages.length} of 4 Images Uploaded</span>
            </div>
        </div>
    );
};

export default ProductImageUpload;
