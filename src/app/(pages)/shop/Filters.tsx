'use client'

import { colors, kidsubcategory, mensubcategory, sizes, womensubcategory } from "@/app/_components/dummydata"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

const Filters = () => {
    const pathname = usePathname()
    const searchParams: any = useSearchParams()
    const { replace } = useRouter()

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target
        const params = new URLSearchParams(searchParams)

        if (value === "") {
            params.delete(name)
        } else {
            params.set(name, value)
        }

        replace(`${pathname}?${params.toString()}`)
    }

    const category = searchParams.get('category')

    let subcategory;
    if (category === 'mens') {
        subcategory = mensubcategory
    }
    if (category === 'womens') {
        subcategory = womensubcategory
    }
    if (category === 'kids') {
        subcategory = kidsubcategory
    }


    return (
        <div className="flex flex-wrap md:flex-row items-center gap-2 xl:gap-5">

            {/* category select */}
            <select name="category" id="category" onChange={handleFilterChange} className="rounded-[5px] px-3 bg-neutral-100 h-[40px] text-[10px]">
                <option value="">All</option>
                <option value="mens">Mens</option>
                <option value="womens">Womens</option>
                <option value="kids">Kids</option>
            </select>


            {category !== null &&
                <select name="subcategory" id="color" onChange={handleFilterChange} className="rounded-[5px] px-3 bg-neutral-100 h-[40px] text-[10px]">
                    <option value="">{`${category} subcategory`}</option>
                    {subcategory?.map((sc, index) => (
                        <option key={index} value={sc}>{sc}</option>
                    ))}
                </select>
            }

            {/* colors select */}
            <select name="color" id="color" onChange={handleFilterChange} className="rounded-[5px] px-3 bg-neutral-100 h-[40px] text-[10px]">
                <option value="">All Colors</option>
                {colors?.map((clr, index) => (
                    <option key={index} value={clr}>{clr}</option>
                ))}
            </select>

            {/* sizes select */}
            <select name="size" id="size" onChange={handleFilterChange} className="rounded-[5px] px-3 bg-neutral-100 h-[40px] text-[10px]">
                <option value="">All Sizes</option>
                {sizes?.map((size, index) => (
                    <option key={index} value={size}>{size}</option>
                ))}
            </select>

            {/* price range select */}
            <select name="price" id="price" onChange={handleFilterChange} className="rounded-[5px] px-3 bg-neutral-100 h-[40px] text-[10px]">
                <option value="">All Prices</option>
                <option value="0-1000">0 to 1000</option>
                <option value="1000-2000">1000 to 2000</option>
                <option value="2000-3000">2000 to 3000</option>
                <option value="3000-4000">3000 to 4000</option>
                <option value="4000-5000">4000 to 5000</option>
            </select>

            {/* time select */}
            <select name="time" id="time" onChange={handleFilterChange} className="rounded-[5px] px-3 bg-neutral-100 h-[40px] text-[10px]">
                <option value="">New Arrivals</option>
                <option value="asc">Ascending</option>
                <option value="dsc">Descending</option>
                <option value="last-week">Last Week</option>
                <option value="last-month">Last Month</option>
            </select>
        </div>
    )
}

export default Filters
