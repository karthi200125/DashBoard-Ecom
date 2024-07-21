import { signOut } from "next-auth/react";

export const logoutFunc = async () => {
    await signOut();    
    localStorage.removeItem('addimages');
    localStorage.removeItem('filterValues');
}