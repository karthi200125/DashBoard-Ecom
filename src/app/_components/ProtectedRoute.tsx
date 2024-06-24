'use client'

import { redirect, usePathname } from "next/navigation"
import { useCurrentUser } from "../hooks/useCurrentUser"
import { toast } from "sonner";

const ProtectedRoute = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    const user = useCurrentUser();
    const pathname = usePathname()

    if (pathname.startsWith("/dashboard")) {
        if (!user || (user && !user.isAdmin)) {
            toast.error("only admin have access")
            redirect('/');
        }
    }

    if (pathname.startsWith("/profile") || pathname.startsWith("/settings") || pathname.startsWith("/favourite")) {
        if (!user) {
            toast.error("you are not logged in")
            redirect('/');
        }
    }


    return (
        <div>
            {children}
        </div>
    )
}

export default ProtectedRoute