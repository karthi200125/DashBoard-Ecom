import { create } from 'zustand';

interface DeleteUserModel {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useDeleteUserModal = create<DeleteUserModel>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}));

export default useDeleteUserModal;
