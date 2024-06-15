import { create } from 'zustand';

interface NewPasswordStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const UseNewPasswordModel = create<NewPasswordStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}));

export default UseNewPasswordModel;
