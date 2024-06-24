import ProtectedRoute from "../_components/ProtectedRoute";

const DashBoardLayout = ({
    children
}: Readonly<{
    children: React.ReactNode;
}>) => {

    return (
        <ProtectedRoute>
        <div className="min-h-screen">            
            {children}
        </div>
        </ProtectedRoute>
    )
}

export default DashBoardLayout