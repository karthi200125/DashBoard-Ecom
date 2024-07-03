'use client'

import dynamic from "next/dynamic"
import { useEffect, useState } from 'react'
import { FaUsers } from "react-icons/fa"
import { MostLikedProducts } from "../../../../actions/dashboard/dashProduct"
import { useQuery } from "@tanstack/react-query"

const TopList = dynamic(() => import("@/app/_components/TopList"), { ssr: false })
const ProductTable = dynamic(() => import("./ProductTable"), { ssr: false })
const TotalProducts = dynamic(() => import("./TotalProducts"), { ssr: false })
const SaleCards = dynamic(() => import("./SaleCards"), { ssr: false })
const ProductMainChart = dynamic(() => import("./ProductMainChart"), { ssr: false })

const Products = () => {

    const { isPending, data: products } = useQuery({
        queryKey: ['mostlikedproducts'],
        queryFn: async () => await MostLikedProducts()
    })

    return (
        <div className="w-full h-full flex flex-col gap-3 mt-5">
            <div className="flex flex-row gap-3">
                <div className="w-[76%] h-full flex flex-col gap-3">
                    <div className="flex flex-row items-center h-[300px] w-full gap-3">
                        <TotalProducts />
                        <SaleCards />
                        <div className="w-full border bg-white rounded-[20px] p-5 h-full">
                            {/* Add any additional content here */}
                        </div>
                    </div>
                    <div className="border rounded-[20px] bg-white h-[350px]">
                        <ProductMainChart />
                    </div>
                </div>
                <div className="bg-white border rounded-[20px] w-[23%] p-5 h-[660px] overflow-y-hidden">
                    <TopList title="Top Products" icon={<FaUsers size={20} />} data={products?.data} route="products" />
                </div>
            </div>
            <ProductTable />
        </div>
    )
}

export default Products
