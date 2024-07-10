'use client'

import CustomImage from "@/components/ui/CustomImage";
import { useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import { AiFillProduct } from "react-icons/ai";
import { MostLikedProducts } from "../../../../actions/dashboard/dashProduct";

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
                        <div className="w-full h-full overflow-hidden ">
                            <CustomImage src={"https://res.cloudinary.com/duextvtta/image/upload/v1720615408/dashpro_a4epyb.webp"} imgclass="border object-cover w-full rounded-[20px] h-[300px]" alt="" />
                        </div>
                    </div>
                    <div className="border rounded-[20px] bg-white h-[350px]">
                        <ProductMainChart />
                    </div>
                </div>
                <div className="bg-white border rounded-[20px] w-[23%] p-5 h-[660px] overflow-y-hidden">
                    <TopList title="Top Products" icon={<AiFillProduct size={25} />} data={products?.data} route="products" />
                </div>
            </div>
            <ProductTable />
        </div>
    )
}

export default Products
