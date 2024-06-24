import ProtectedRoute from "@/app/_components/ProtectedRoute";

const FavProLayout = ({
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

export default FavProLayout