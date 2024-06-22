import { create } from 'zustand';

interface EditProfileModel {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useEditProfileModal = create<EditProfileModel>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}));

export default useEditProfileModal;
