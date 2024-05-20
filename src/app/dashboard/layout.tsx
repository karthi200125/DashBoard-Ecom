import DashNavbar from "../_components/DashNavbar";

const DashBoardLayout = ({
    children
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="min-h-screen">
            <DashNavbar />
            {children}
        </div>
    )
}

export default DashBoardLayout