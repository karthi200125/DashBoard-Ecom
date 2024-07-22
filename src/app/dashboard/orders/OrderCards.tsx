import Icon from '@/app/_components/Icon'
import Image from '@/components/ui/CustomImage';
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { RiBarChartFill } from "react-icons/ri";
import { getOrderTotalSales, getOrderTotalSalesForCurrentMonth } from '../../../../actions/dashboard/dashOrder';
import { useQuery } from '@tanstack/react-query';


const OrderCards = () => {

    const { data } = useQuery({
        queryKey: ['totalordersum'],
        queryFn: async () => await getOrderTotalSales(),
    });

    const { data: totalmonthsales } = useQuery({
        queryKey: ['thismonthtotalordersum'],
        queryFn: async () => await getOrderTotalSalesForCurrentMonth(),
    });

    const slaecards = [
        {
            id: '1',
            icon: <MdOutlineProductionQuantityLimits />,
            sale: "70",
            value: data?.data,
            texts: "Total Orders"
        },
        {
            id: '2',
            icon: <RiBarChartFill />,
            sale: "20",
            value: totalmonthsales?.data,
            texts: "This Month orders"
        }
    ]

    return (
        <div className='w-[300px] h-full flex flex-col gap-3'>
            {slaecards?.map((sc) => (
                <div key={sc?.id} className='flex-1 border bg-white rounded-[15px] p-5 flex flex-col justify-between'>
                    <div className='flex flex-row justify-between '>
                        <Icon icon={sc?.icon} tooltip='Sales' />
                        <div className='flex flex-row gap-1 items-center'>
                            <GoArrowUpRight className='text-green-400 font-bold text-lg' />
                            <h1 className='font-bold text-sm'>{sc?.sale} %</h1>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-bold text-xl'>${sc?.value}</h1>
                        <h2 className='text-sm text-neutral-400 leading-none'>{sc?.texts}</h2>
                    </div>
                </div>
            ))}
            <Image src={""} imgclass="border rounded-[20px] h-[100px]" alt='' />
        </div>
    )
}

export default OrderCards