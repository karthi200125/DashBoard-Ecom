'use client'
import React from 'react';
import './Modal.scss';
import { IoIosClose } from 'react-icons/io'

interface ModalProps {
    isOpen: boolean;
    toggleOpen: () => void;
    modalBody: any;
    modalCls?: string;
}

const Modal = ({ isOpen, toggleOpen, modalBody, modalCls }: ModalProps) => {
    return (
        <div className={`overlay ${isOpen ? "open" : ""}`} >
            <div className={`modal flex flex-col gap-3 p-10 ${modalCls}`} onClick={(e) => e.stopPropagation()}>
                {/* modal top */}
                <div className='flex flex-col gap-1 py-2 relative border-b'>
                    <h1 className='text-2xl font-bold'>Title</h1>
                    <p className='text-sm text-neutral-400'>descrption</p>
                    <div className='absolute w-[40px] h-[40px] flex items-center justify-center rounded-full hover:bg-neutral-100 transition cursor-pointer top-0 right-0' onClick={toggleOpen}>
                        <IoIosClose size={25} />
                    </div>
                </div>
                {/* modal body */}
                {modalBody}
            </div>
        </div>
    );
};

export default Modal;
