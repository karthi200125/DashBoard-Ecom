import ProtectedRoute from "@/app/_components/ProtectedRoute";

const ProfileLayout = ({
    children
}: Readonly<{
    children: React.ReactNode;
}>) => {

    return (
        <ProtectedRoute>
            <div>
                {children}
            </div>
        </ProtectedRoute>
    )
}

export default ProfileLayout