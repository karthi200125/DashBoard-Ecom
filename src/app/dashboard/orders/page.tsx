'use client'

import TopList from "@/app/_components/TopList"
import { ListOrderedIcon } from "lucide-react"
import { userdata } from "../users/UserTable"

const Orders = () => {
    
    return (
        <div className="min-h-screen flex flex-row gap-3">
            <div className="w-[76%] h-full bg-white border rounded-[20px] p-5">
                left
            </div>
            <div className="bg-white border rounded-[20px] w-[23%] p-5">
                <TopList icon={<ListOrderedIcon size={20} />} title="Top Orders" data={userdata} />
            </div>
        </div>
    )
}

export default Orders