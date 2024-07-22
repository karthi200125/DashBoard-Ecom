'use client';
import React, { memo, useCallback } from 'react';
import './Modal.scss';
import { IoIosClose } from 'react-icons/io';

interface ModalProps {
    isOpen: boolean;
    toggleOpen: () => void;
    modalBody?: React.ReactElement;
    modalCls?: string;
    closeBtn?: string;
}

const Modal = ({ isOpen, toggleOpen, modalBody, modalCls, closeBtn }: ModalProps) => {
    const handleToggleOpen = useCallback(() => {
        toggleOpen();
    }, [toggleOpen]);

    return (
        <div className={`overlay ${isOpen ? "open" : ""}`}>
            <div className={`modal md:rounded-[20px] flex flex-col gap-3 p-3 ${modalCls}`} onClick={(e) => e.stopPropagation()}>
                {/* close modal */}
                <div className={`absolute w-[40px] h-[40px] flex items-center justify-center rounded-full ${closeBtn ? `${closeBtn}` : "hover:bg-neutral-100"} transition cursor-pointer top-5 right-5 z-10`} onClick={handleToggleOpen}>
                    <IoIosClose size={25} />
                </div>
                {/* modal body */}
                {modalBody}
            </div>
        </div>
    );
};

export default memo(Modal);
