'use client'

import { ListOrderedIcon } from "lucide-react"
import dynamic from "next/dynamic"
const TopList = dynamic(() => import("@/app/_components/TopList"))
const OrderCards = dynamic(() => import("./OrderCards"))
const OrderGraph = dynamic(() => import("./OrderGraph"))
const OrderTable = dynamic(() => import("./OrderTable"))

export const orderdata = [
    {
        id: 1,
        orderId: '1233',
        customer: "test",
        products: [
            {
                id: 1,
                productImage: "",
                productName: "sample"
            },
            {
                id: 2,
                productImage: "",
                productName: "sample2"
            },
            {
                id: 3,
                productImage: "",
                productName: "sample"
            },
            {
                id: 4,
                productImage: "",
                productName: "sample2"
            },
        ],
        address: "1/113, Sample Street, Mumbai, India",
        date: "5/May/2020",
        price: "1000rs",
        status: "complete"
    },
    {
        id: 2,
        orderId: '1234',
        customer: "test",
        products: [
            {
                id: 2,
                productImage: "",
                productName: "example"
            }
        ],
        address: "22/7, Example Lane, Delhi, India",
        date: "10/June/2021",
        price: "2000rs",
        status: "pending"
    },
    {
        id: 3,
        orderId: '1235',
        customer: "test",
        products: [
            {
                id: 3,
                productImage: "",
                productName: "test"
            }
        ],
        address: "5/9, Test Road, Bangalore, India",
        date: "15/July/2022",
        price: "1500rs",
        status: "shipped"
    },
    {
        id: 4,
        orderId: '1236',
        customer: "test",
        products: [
            {
                id: 4,
                productImage: "",
                productName: "item"
            }
        ],
        address: "8/23, Item Avenue, Hyderabad, India",
        date: "20/August/2023",
        price: "3000rs",
        status: "delivered"
    },
]

const Orders = () => {

    return (
        <div className="min-h-screen flex flex-col gap-2">
            <div className="flex flex-row gap-3">
                <div className="w-[76%] h-full flex flex-row gap-3 justify-between">
                    <OrderGraph />
                    <OrderCards />
                </div>
                <div className="bg-white border rounded-[20px] w-[23%] p-5">
                    <TopList icon={<ListOrderedIcon size={20} />} title="Top Orders" data={orderdata} route="orders" />
                </div>
            </div>
            <div className="border bg-white p-5 rounded-[20px]">
                <OrderTable />
            </div>
        </div>
    )
}

export default Orders