'use client'

import React, { useTransition } from 'react';
import Modal from './Modal';
import CustomBtn from '../CustomBtn';
import { toast } from 'sonner';
import useDeleteOrderModel from '@/app/hooks/useDeleteOrderModel';
import { useQueryClient } from '@tanstack/react-query';
import { deleteOrder } from '../../../../actions/order';


const DeleteorderBody = ({ order }: any) => {
    const deleteOrderModel = useDeleteOrderModel();
    const [isLoading, startTransition] = useTransition();
    const queryClient = useQueryClient()


    const HandleDelete = () => {
        startTransition(() => {
            deleteOrder(order?.id).
                then((data: any) => {
                    if (data?.success) {
                        toast.success(data?.success)
                        deleteOrderModel.onClose()
                        // queryClient.invalidateQueries({ queryKey: ['gendercount'] });
                        // queryClient.invalidateQueries({ queryKey: ['getMonthlyorderCounts'] });
                        queryClient.invalidateQueries({ queryKey: ['getallorders'] });
                        queryClient.invalidateQueries({ queryKey: ['totalordersum'] });
                        queryClient.invalidateQueries({ queryKey: ['thismonthtotalordersum'] });
                    }
                    if (data?.error) {
                        toast.error(data?.error)
                    }
                })
        })
    }

    return (
        <div className="w-full h-full p-5 rounded-[20px] flex flex-col gap-3">
            <h4 className='py-2 border-b'>Delete order</h4>
            <div className="flex flex-col gap-5 items-center justify-center py-2">
                <p className="text-center">Are you sure you want to delete this order <b className='text-black font-bold'>{"ordename name"}</b>?</p>
                {/* <orderProfile proSrc={order?.image} /> */}
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


const DeleteOrderModel = ({ order }: any) => {
    const deleteOrderModel = useDeleteOrderModel();
    return (
        <Modal
            isOpen={deleteOrderModel.isOpen}
            toggleOpen={deleteOrderModel.onClose}
            modalBody={<DeleteorderBody order={order} />}
            modalCls='w-full md:w-[400px] max-h-max'
        />
    );
};

export default DeleteOrderModel;
