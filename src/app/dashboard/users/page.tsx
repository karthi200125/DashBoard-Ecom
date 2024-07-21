'use client'

import dynamic from "next/dynamic"
import { FaUsers } from "react-icons/fa"
import { getTopOrderUsers } from "../../../../actions/dashboard/dashUser"
import { useQuery } from "@tanstack/react-query"
const UserTable = dynamic(() => import("../users/UserTable"), { ssr: false })
const TopList = dynamic(() => import("@/app/_components/TopList"), { ssr: false })
const Image = dynamic(() => import("@/components/ui/CustomImage"), { ssr: false })
const NewUsers = dynamic(() => import("./NewUsers"), { ssr: false })
const TotalUser = dynamic(() => import("./TotalUser"), { ssr: false })
const UserGraph = dynamic(() => import("./UserGraph"), { ssr: false })

const Users = () => {

    const { data } = useQuery({
        queryKey: ['gettoporderusers'],
        queryFn: async () => await getTopOrderUsers(),
    });
    
    return (
        <div className="h-full w-full flex flex-col gap-3 mt-5">

            <div className="flex flex-row items-start justify-between ">
                <div className="flex flex-col gap-3 h-full w-[76%]">
                    {/* users top row */}
                    <div className="flex flex-row justify-between items-center h-[300px] gap-3">
                        <div className="h-full flex-1 flex flex-col justify-between">
                            <h2>Overview</h2>
                            <h6>Welcome to users dashbaord</h6>
                            <Image src={"https://res.cloudinary.com/duextvtta/image/upload/v1720615735/test_1_jufulw.webp"} imgclass="w-full border object-cover rounded-[20px] h-[220px]" alt="" />
                        </div>
                        <TotalUser />
                        {/* <NewUsers /> */}
                    </div>

                    {/* users mide row */}
                    <div className="mid">
                        <UserGraph />
                    </div>

                </div>

                <div className="bg-white border rounded-[20px] w-[23%] p-5 h-[660px] overflow-y-hidden">
                    <TopList title="Top users" icon={<FaUsers size={20} />} data={data?.data} />
                </div>
            </div>

            <UserTable />

        </div>
    )
}

export default Users
