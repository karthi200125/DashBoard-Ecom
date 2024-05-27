import TopList from "@/app/_components/TopList"
import { FaUsers } from "react-icons/fa"
import ProductTable from "./ProductTable"

export const productsdata = [
    {
        id: 1,
        proImage: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
        proName: "producst 1",
        orderedCounts: [],
        proPrice: "1000",
        createdAt:"may-10-2020"
    },
    {
        id: 2,
        proImage: "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=600",
        proName: "producst 2",
        orderedCounts: [],
        proPrice: "1000",
        createdAt:"may-10-2020"
    },
    {
        id: 3,
        proImage: "https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=600",
        proName: "producst 3",
        orderedCounts: [],
        proPrice: "1000",
        createdAt:"may-10-2020"
    },
]

const Products = () => {
    
    return (
        <div className="w-full h-full flex flex-col gap-3">
            <div className="flex flex-row gap-3">
                <div className="border bg-white rounded-[20px] w-[76%] h-full">
                    left
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