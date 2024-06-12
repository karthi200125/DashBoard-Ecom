import dynamic from "next/dynamic"
import { FaUsers } from "react-icons/fa"
const TopList = dynamic(() => import("@/app/_components/TopList"))
const ProductTable = dynamic(() => import("./ProductTable"))
const TotalProducts = dynamic(() => import("./TotalProducts"))
const SaleCards = dynamic(() => import("./SaleCards"))
const ProductMainChart = dynamic(() => import("./ProductMainChart"))

export const productsdata = [
    {
        id: 1,
        proImage: "",
        proName: "producst 1",
        orderedCounts: [],
        proPrice: "1000",
        createdAt: "may-10-2020"
    },
    {
        id: 2,
        proImage: "",
        proName: "producst 2",
        orderedCounts: [],
        proPrice: "1000",
        createdAt: "may-10-2020"
    },
    {
        id: 3,
        proImage: "",
        proName: "producst 3",
        orderedCounts: [],
        proPrice: "1000",
        createdAt: "may-10-2020"
    },
]

const Products = () => {

    return (
        <div className="w-full h-full flex flex-col gap-3">
            <div className="flex flex-row gap-3">
                <div className="w-[76%] h-full flex flex-col gap-3">
                    <div className="flex flex-row items-center h-[300px] w-full gap-3">
                        <TotalProducts />
                        <SaleCards />
                        <div className="w-full border bg-white rounded-[20px] p-5 h-full">

                        </div>
                    </div>
                    <div className="border rounded-[20px] bg-white h-[350px]">
                        <ProductMainChart />
                    </div>
                </div>
                <div className="bg-white border rounded-[20px] w-[23%] p-5 h-[660px] overflow-y-hidden">
                    <TopList title="Top Products" icon={<FaUsers size={20} />} data={productsdata} route="products" />
                </div>
            </div>
            <ProductTable />

        </div>
    )
}

export default Products