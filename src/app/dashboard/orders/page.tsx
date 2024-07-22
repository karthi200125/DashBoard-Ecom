'use client'

import { useQuery } from "@tanstack/react-query"
import { ListOrderedIcon } from "lucide-react"
import dynamic from "next/dynamic"
import { getTopOrders } from "../../../../actions/dashboard/dashOrder"
const TopList = dynamic(() => import("@/app/_components/TopList"))
const OrderCards = dynamic(() => import("./OrderCards"))
const OrderGraph = dynamic(() => import("./OrderGraph"))
const OrderTable = dynamic(() => import("./OrderTable"))

const Orders = () => {

    const { data, isPending } = useQuery({
        queryKey: ['topOrders'],
        queryFn: async () => await getTopOrders(),
    });

    return (
        <div className="min-h-screen flex flex-col gap-2">
            <div className="flex flex-row gap-3">
                <div className="w-[76%] h-full flex flex-row gap-3 justify-between">
                    <OrderGraph />
                    <OrderCards />
                </div>
                <div className="bg-white border rounded-[20px] w-[23%] p-5">
                    <TopList icon={<ListOrderedIcon size={20} />} isLoading={isPending} title="Top Orders" data={data?.data} route="orders" />
                </div>
            </div>
            <div className="border bg-white p-5 rounded-[20px]">
                <OrderTable />
            </div>
        </div>
    )
}

export default Orders