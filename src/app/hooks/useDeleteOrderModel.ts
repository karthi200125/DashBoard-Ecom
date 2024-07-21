import { create } from 'zustand';

interface DeleteOrderModel {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useDeleteOrderModal = create<DeleteOrderModel>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}));

export default useDeleteOrderModal;
