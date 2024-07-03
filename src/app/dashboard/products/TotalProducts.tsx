'use client'

import { useQuery } from '@tanstack/react-query'
import {
    ArcElement,
    Chart as ChartJs,
    Legend,
    Tooltip,
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { FaUsers } from 'react-icons/fa'
import { categoryCount } from '../../../../actions/dashboard/dashProduct'

ChartJs.register(
    ArcElement,
    Tooltip,
    Legend
);

const TotalProducts = () => {

    const { isPending, data } = useQuery({
        queryKey: ['categorycount'],
        queryFn: async () => await categoryCount()
    })
    
    const count = data?.categoryCounts ?? { mens: 0, womens: 0, kids: 0 };
    const products = data?.data ?? [];

    const graphData = {
        datasets: [{
            data: [count.mens, count.womens, count.kids],
            backgroundColor: ["#4FD2B5", "#FFCB49", "#7464FF"],
            borderColor: ["#4FD2B5", "#FFCB49", "#7464FF"],
            cutout: '80%'
        }]
    };

    const total = products.length;

    return (
        <div className='w-[280px] border bg-white rounded-[20px] p-5 h-full'>
            <div className='flex flex-row items-center gap-2'>
                <FaUsers size={25} />
                <h5>Total Products</h5>
            </div>

            <div className='w-full h-full flex items-center justify-center flex-col gap-5'>
                <div className="w-[150px] h-[150px] relative">
                    <Doughnut data={graphData} />
                    <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center leading-none text-center mt-3">
                        <h6 >Total</h6>
                        <h6 >Products</h6>
                        <p className="text-[12px] ">{total}</p>
                    </div>
                </div>
                <div className='flex flex-row gap-5 w-full items-center justify-center'>
                    <div className='flex flex-row gap-2 items-start '>
                        <span className='w-[10px] h-[10px] rounded-full bg-[#4FD2B5] mt-2'></span>
                        <div className="flex flex-col justify-center">
                            <h6>Mens</h6>
                            <p>{count.mens}</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-2 items-start'>
                        <span className='w-[10px] h-[10px] rounded-full bg-[#FFCB49] mt-2'></span>
                        <div className="flex flex-col justify-center">
                            <h6>Womens</h6>
                            <p>{count.womens}</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-2 items-start'>
                        <span className='w-[10px] h-[10px] rounded-full bg-[#7464FF] mt-2'></span>
                        <div className="flex flex-col justify-center">
                            <h6>Kids</h6>
                            <p>{count.kids}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TotalProducts;
