'use client'

import TopList from "@/app/_components/TopList"
import { ListOrderedIcon } from "lucide-react"
import { userdata } from "../users/UserTable"
import OrderTable from "./OrderTable"

export const orderdata = [
    {
        id: 1,
        orderId: '1233',
        customer: "test",
        products: [
            {
                id: 1,
                productImage: "https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?auto=compress&cs=tinysrgb&w=600",
                productName: "sample"
            },
            {
                id: 2,
                productImage: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=600",
                productName: "sample2"
            },
            {
                id: 3,
                productImage: "https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?auto=compress&cs=tinysrgb&w=600",
                productName: "sample"
            },
            {
                id: 4,
                productImage: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=600",
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
                productImage: "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=600",
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
                productImage: "https://images.pexels.com/photos/2693644/pexels-photo-2693644.jpeg?auto=compress&cs=tinysrgb&w=600",
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
    {
        id: 5,
        orderId: '1237',
        customer: "test",
        products: [
            {
                id: 5,
                productImage: "",
                productName: "product"
            }
        ],
        address: "12/45, Product Street, Chennai, India",
        date: "25/September/2024",
        price: "2500rs",
        status: "canceled"
    }
]

const Orders = () => {

    return (
        <div className="min-h-screen flex flex-col gap-2">
            <div className="flex flex-row gap-3">
                <div className="w-[76%] h-full bg-white border rounded-[20px] p-5">

                </div>
                <div className="bg-white border rounded-[20px] w-[23%] p-5">
                    <TopList icon={<ListOrderedIcon size={20} />} title="Top Orders" data={orderdata} route="orders"/>
                </div>
            </div>
            <div className="border bg-white p-5 rounded-[20px]">
                <OrderTable />
            </div>
        </div>
    )
}

export default Orders