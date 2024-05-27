'use client'

import Icon from '@/app/_components/Icon'
import Search from '@/app/_components/Search'
import { Button } from '@/components/ui/button'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet"
import { Skeleton } from '@/components/ui/skeleton'
import { useState } from 'react'
import { FaUsers } from "react-icons/fa"
import { IoIosMore } from "react-icons/io"
import OrderProducts from './OrderProducts'
import Order from './Order'

export const userdata = [
    {
        id: 1,
        name: "sample",
        email: "samplesamplesample.@gamil.com",
        gender: "male",
        phone: "1234567890",
        profilepic: "",
        country: "india",
        createdAt: "jun-2020"
    }, {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
        gender: "female",
        phone: "0987654321",
        profilepic: "https://example.com/profiles/janesmith.jpg",
        country: "UK",
        createdAt: "feb-2021"
    },
    {
        id: 3,
        name: "Carlos Mendez",
        email: "carlos.mendez@example.com",
        gender: "male",
        phone: "1122334455",
        profilepic: "https://example.com/profiles/carlosmendez.jpg",
        country: "Mexico",
        createdAt: "mar-2021"
    },
    {
        id: 4,
        name: "Maria Garcia",
        email: "maria.garcia@example.com",
        gender: "female",
        phone: "2233445566",
        profilepic: "https://example.com/profiles/mariagarcia.jpg",
        country: "Spain",
        createdAt: "apr-2021"
    },
    {
        id: 5,
        name: "Liam Brown",
        email: "liam.brown@example.com",
        gender: "male",
        phone: "3344556677",
        profilepic: "https://example.com/profiles/liambrown.jpg",
        country: "Canada",
        createdAt: "may-2021"
    },
    {
        id: 6,
        name: "Emma Wilson",
        email: "emma.wilson@example.com",
        gender: "female",
        phone: "4455667788",
        profilepic: "https://example.com/profiles/emmawilson.jpg",
        country: "Australia",
        createdAt: "jun-2021"
    },
    {
        id: 7,
        name: "Noah Davis",
        email: "noah.davis@example.com",
        gender: "male",
        phone: "5566778899",
        profilepic: "https://example.com/profiles/noahdavis.jpg",
        country: "New Zealand",
        createdAt: "jul-2021"
    },
    {
        id: 8,
        name: "Olivia Martinez",
        email: "olivia.martinez@example.com",
        gender: "female",
        phone: "6677889900",
        profilepic: "https://example.com/profiles/oliviamartinez.jpg",
        country: "Argentina",
        createdAt: "aug-2021"
    },
    {
        id: 9,
        name: "Lucas Johnson",
        email: "lucas.johnson@example.com",
        gender: "male",
        phone: "7788990011",
        profilepic: "https://example.com/profiles/lucasjohnson.jpg",
        country: "South Africa",
        createdAt: "sep-2021"
    },
    {
        id: 10,
        name: "Ava Lee",
        email: "ava.lee@example.com",
        gender: "female",
        phone: "8899001122",
        profilepic: "https://example.com/profiles/avalee.jpg",
        country: "South Korea",
        createdAt: "oct-2021"
    }
]

const orderdata = [
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

const OrderTable = () => {

    const [CurrentPage, SetCurrentPage] = useState(1)
    const LastPage = true

    const isLoading = false

    return (
        <div className={`w-full ${isLoading ? "h-[800px]" : "min-h-[300px]"}`}>

            {/* table top */}
            <div className="flex flex-row items-center justify-between">
                <h1 className='font-bold flex flex-row items-center gap-2 '>
                    <FaUsers size={20} />
                    <h1>Orders</h1>
                    <span>{`(${orderdata?.length})`}</span>
                </h1>
                <Search />
                <div>

                    <div className='flex flex-row items-center gap-3'>
                        <Select>
                            <SelectTrigger className="w-[150px]">
                                <SelectValue placeholder="All" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Fruits</SelectLabel>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">Banana</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        {/* <Select>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select> */}
                    </div>

                </div>
            </div>

            {/* tbale */}
            <table className='min-w-full divide-y divide-gray-200 mt-5 relative'>
                <thead className="bg-[var(--gray)] text-black">
                    <tr >
                        <th scope="col" className="px-3 py-3 text-left text-xs font-bold  uppercase tracking-wider">OrderId</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-bold  uppercase tracking-wider">Product</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-bold  uppercase tracking-wider">Customer</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-bold  uppercase tracking-wider">Address</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-bold  uppercase tracking-wider">Date</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-bold  uppercase tracking-wider">Price</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-bold  uppercase tracking-wider">Status</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-bold  uppercase tracking-wider">Action</th>
                    </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">

                    {isLoading ?
                        <div className='w-full absolute flex flex-col gap-1 mt-2'>
                            {[...Array(10)].map((_, index) => (
                                <Skeleton key={index} className='w-full bg-neutral-200 h-[60px]' />
                            ))}
                        </div>
                        :
                        orderdata?.length > 0 ?
                            orderdata?.map((order) => (
                                <tr key={order?.id}>
                                    <td className="px-3 py-4 text-sm whitespace-nowrap">{order?.orderId}</td>
                                    <td className="px-6 py-4 text-sm whitespace-nowrap flex flex-row items-center gap-2">
                                        <OrderProducts orderproducts={order} />
                                    </td>
                                    <td className="px-6 py-4 text-sm whitespace-nowrap">{order?.customer}</td>
                                    <td className="px-6 py-4 text-sm whitespace-nowrap">{order?.address}</td>
                                    <td className="px-6 py-4 text-sm whitespace-nowrap">{order?.date}</td>
                                    <td className="px-6 py-4 text-sm whitespace-nowrap">{order?.price}</td>
                                    <td className="px-6 py-4 text-sm whitespace-nowrap">{order?.status}</td>
                                    {/* <td className="px-6 py-4 text-sm whitespace-nowrap">{order?.createdAt}</td> */}
                                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                                        <Sheet>
                                            <SheetTrigger>
                                                <Icon icon={<IoIosMore size={20} />} tooltip='More' />
                                            </SheetTrigger>
                                            <SheetContent className='bg-white'>
                                                <Order orderData={order} />
                                            </SheetContent>
                                        </Sheet>
                                    </td>
                                </tr>
                            ))
                            :
                            <div className='w-full h-full bg-red-400'>No User</div>
                    }

                </tbody>

            </table>

            {/* Table bottom */}
            <div className='flex flex-row w-full justify-end border-t-[1px] border-solid border-neutral-200 py-3' >
                <div className='flex flex-row items-center gap-2'>
                    <Button variant='normal' disabled={CurrentPage === 1 && true}>Previous</Button>
                    <Button variant='normal'>1</Button>
                    <Button variant='normal' disabled={LastPage}>Next</Button>
                </div>
            </div>

        </div>
    )
}

export default OrderTable