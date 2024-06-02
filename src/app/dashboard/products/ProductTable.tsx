'use client'

import Icon from '@/app/_components/Icon'
import Search from '@/app/_components/Search'
import User from '@/app/_components/User'
import UserProfile from '@/app/_components/UserProfile'
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
import { productsdata } from './page'
import Product from './Product'
import CustomBtn from '@/app/_components/CustomBtn'
import { useRouter } from 'next/navigation'


const ProductTable = () => {

    const [CurrentPage, SetCurrentPage] = useState(1)
    const LastPage = true
    const isLoading = false

    const router = useRouter()

    return (
        <div className={`w-full ${isLoading ? "h-[800px]" : "min-h-[300px]"}  border bg-white rounded-[20px] p-5 flex flex-col`}>

            {/* table top */}
            <div className="flex flex-row items-center justify-between">
                <h1 className='font-bold flex flex-row items-center gap-2 '>
                    <FaUsers size={20} />
                    <h1>Products</h1>
                    <span>{`(${productsdata?.length})`}</span>
                </h1>
                <Search placeholder='Search products ' name='products' onChange={(value: string) => console.log(value)} />
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

                        <CustomBtn arrow onClick={() => router.push('/dashboard/createproduct')}>
                            Create New Product
                        </CustomBtn>

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
                        <th scope="col" className="px-6 py-3 text-left text-xs font-bold  uppercase tracking-wider">Product Id</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-bold  uppercase tracking-wider">Product</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-bold  uppercase tracking-wider">Price</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-bold  uppercase tracking-wider">CreatedAt</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-bold  uppercase tracking-wider">More</th>
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
                        productsdata?.length > 0 ?
                            productsdata?.map((pro) => (
                                <tr key={pro?.id}>
                                    <td className="px-6 py-4 text-sm whitespace-nowrap">{pro?.id}</td>
                                    <td className="px-6 py-4 text-sm whitespace-nowrap flex flex-row items-center gap-2">
                                        <UserProfile profileCls='w-10 h-10' proSrc={pro?.proImage} proAlt={pro?.proName} tooltip={pro?.proName} />
                                        <span>{pro?.proName}</span>
                                    </td>
                                    <td className="px-6 py-4 text-sm whitespace-nowrap">{pro?.proPrice}</td>
                                    <td className="px-6 py-4 text-sm whitespace-nowrap">{pro?.createdAt}</td>
                                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                                        <Sheet>
                                            <SheetTrigger>
                                                <Icon icon={<IoIosMore size={20} />} tooltip='More' />
                                            </SheetTrigger>
                                            <SheetContent className='bg-white'>
                                                <Product product={pro} />
                                            </SheetContent>
                                        </Sheet>
                                    </td>
                                </tr>
                            ))
                            :
                            <div className='w-full h-full bg-red-400'>No Products</div>
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

export default ProductTable