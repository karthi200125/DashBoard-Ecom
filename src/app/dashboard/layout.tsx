// import { redirect } from "next/navigation";
// import { useCurrentUser } from "../hooks/useCurrentUser";

const DashBoardLayout = ({
    children
}: Readonly<{
    children: React.ReactNode;
}>) => {

    // const user = useCurrentUser()

    // console.log("user", !user)

    // if(!user && user?.isAdmin !== true){
    //     return redirect('/')
    // }

    return (
        <div className="min-h-screen">            
            {children}
        </div>
    )
}

export default DashBoardLayout