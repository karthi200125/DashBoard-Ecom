import Icon from '@/app/_components/Icon'
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { RiBarChartFill } from "react-icons/ri";

const SaleCards = () => {

    const slaecards = [
        {
            id: '1',
            icon: <MdOutlineProductionQuantityLimits />,
            sale: "",
            value: "",
            texts: "Total sales"
        },
        {
            id: '2',
            icon: <RiBarChartFill />,
            sale: "",
            value: "",
            texts: "This Month sales"
        }
    ]

    return (
        <div className='w-[500px] h-full flex flex-col gap-3'>
            {slaecards?.map((sc) => (
                <div key={sc?.id} className='flex-1 border bg-white rounded-[15px] p-5 flex flex-col justify-between'>
                    <div className='flex flex-row justify-between '>
                        <Icon icon={sc?.icon} tooltip='Sales' />
                        <div className='flex flex-row gap-1 items-center'>
                            <GoArrowUpRight className='text-green-400 font-bold text-lg' />
                            <h5>0 %</h5>
                        </div>
                    </div>
                    <div>
                        <h4>₹ 0</h4>
                        <p className='leading-none'>{sc?.texts}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SaleCards