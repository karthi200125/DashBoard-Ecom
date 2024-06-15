import { create } from 'zustand';

interface PasswordResetEmailStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const UsePasswordResetEmailModel = create<PasswordResetEmailStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}));

export default UsePasswordResetEmailModel;
