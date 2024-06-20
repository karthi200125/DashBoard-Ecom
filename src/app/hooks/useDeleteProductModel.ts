import { create } from 'zustand';

interface DeleteProductModel {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useDeleteProductModal = create<DeleteProductModel>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}));

export default useDeleteProductModal;
