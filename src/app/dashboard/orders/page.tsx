'use client'

import TopList from "@/app/_components/TopList"
import { ListOrderedIcon } from "lucide-react"
import { userdata } from "../users/UserTable"
import OrderTable from "./OrderTable"

const Orders = () => {

    return (
        <div className="min-h-screen flex flex-col gap-2">
            <div className="flex flex-row gap-3">
                <div className="w-[76%] h-full bg-white border rounded-[20px] p-5">

                </div>
                <div className="bg-white border rounded-[20px] w-[23%] p-5">
                    {/* <TopList icon={<ListOrderedIcon size={20} />} title="Top Orders" data={userdata} /> */}
                </div>
            </div>
            <div className="border bg-white p-5 rounded-[20px]">
                <OrderTable />
            </div>
        </div>
    )
}

export default Orders