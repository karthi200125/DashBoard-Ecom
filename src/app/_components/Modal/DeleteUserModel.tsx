'use client'

import useDeleteUserModal from '@/app/hooks/useDeleteUserModel';
import React, { useTransition } from 'react';
import Modal from './Modal';
import CustomBtn from '../CustomBtn';
import { deleteUser } from '../../../../actions/user';
import { toast } from 'sonner';

interface DeleteUserBodyProps {
    user: {
        name: string;
    };
}

const DeleteUserBody = ({ user }: DeleteUserBodyProps) => {
    const deleteuserModal = useDeleteUserModal();
    const [isLoading, startTransition] = useTransition();

    const HandleDelete = () => {
        startTransition(() => {
            deleteUser(user?.id).
                then((data) => {
                    if (data?.success) {
                        toast.success(data?.success)
                        deleteuserModal.onClose()
                    }
                    if (data?.error) {
                        toast.error(data?.error)
                    }
                })
        })
    }

    return (
        <div className="w-full h-full p-5 rounded-[20px] flex flex-col gap-3">
            <h2 className='py-2 border-b'>Delete user</h2>
            <div className="flex flex-col gap-5 items-center justify-center py-2">
                <p className="text-center">Are you sure you want to delete this user <b>{user?.name}</b>?</p>
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

interface DeleteuserModalProps {
    user: {
        name: string;
    };
}

const DeleteuserModal = ({ user }: DeleteuserModalProps) => {
    const deleteuserModal = useDeleteUserModal();
    return (
        <Modal
            isOpen={deleteuserModal.isOpen}
            toggleOpen={deleteuserModal.onClose}
            modalBody={<DeleteUserBody user={user} />}
            modalCls='w-full md:w-[400px] max-h-max'
        />
    );
};

export default DeleteuserModal;
