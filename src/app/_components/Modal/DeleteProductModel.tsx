'use client'

import useDeleteProductModal from '@/app/hooks/useDeleteProductModel';
import React, { useTransition } from 'react';
import Modal from './Modal';
import CustomBtn from '../CustomBtn';
import { deletProduct } from '../../../../actions/product';
import { toast } from 'sonner';
import AvatarCircles from '../AvatarCircles';
import { useQueryClient } from '@tanstack/react-query';


const DeleteProductBody = ({ product }: any) => {
    const deleteProductModal = useDeleteProductModal();
    const [isLoading, startTransition] = useTransition();
    const queryClient = useQueryClient()


    const HandleDelete = () => {
        startTransition(() => {
            deletProduct(product?.id).
                then((data) => {
                    if (data?.success) {
                        toast.success(data?.success)
                        deleteProductModal.onClose()
                        queryClient.invalidateQueries({ queryKey: ['getproducts'] });
                        queryClient.invalidateQueries({ queryKey: ['categorycount'] });
                        queryClient.invalidateQueries({ queryKey: ['getmaingraphproducts'] });
                    }
                    if (data?.error) {
                        toast.error(data?.error)
                    }
                })
        })
    }

    return (
        <div className="w-full h-full p-5 rounded-[20px] flex flex-col gap-3">
            <h4 className='py-2 border-b'>Delete Product</h4>
            <div className="flex flex-col gap-5 items-center justify-center py-2">
                <p className="text-center">Are you sure you want to delete this product <b className='text-black'>{product?.proName}</b>?</p>
                <AvatarCircles numPeople={product.proImage.length} avatarUrls={product.proImage} />
                <CustomBtn
                    btnCls='bg-black text-white w-[200px] flex items-center justify-center'
                    onClick={HandleDelete}
                    isLoading={isLoading}
                >
                    Delete
                </CustomBtn>
            </div>
        </div>
    );
};

interface DeleteProductModalProps {
    product: {
        proName: string;
    };
}

const DeleteProductModal = ({ product }: DeleteProductModalProps) => {
    const deleteProductModal = useDeleteProductModal();
    return (
        <Modal
            isOpen={deleteProductModal.isOpen}
            toggleOpen={deleteProductModal.onClose}
            modalBody={<DeleteProductBody product={product} />}
            modalCls='w-full md:w-[400px] max-h-max'
        />
    );
};

export default DeleteProductModal;
