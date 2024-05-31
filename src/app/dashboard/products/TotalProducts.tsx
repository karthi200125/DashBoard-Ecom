'use client'

import React from 'react'
import { FaUsers } from 'react-icons/fa'
import {
    Chart as ChartJs,
    Tooltip,
    ArcElement,
    Legend,
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJs.register(
    ArcElement,
    Tooltip,
    Legend
);

const TotalProducts = () => {

    const data = {
        datasets: [{
            data: [10, 6, 3],
            backgroundColor: ["#4FD2B5", "#FFCB49", "#7464FF"],
            borderColor: ["#4FD2B5", "#FFCB49", "#7464FF"],
            cutout: '80%'
        }]
    };

    const total = "1000"

    return (
        <div className='w-[280px] border bg-white rounded-[20px] p-5 h-full'>
            <div className='flex flex-row items-center gap-2'>
                <FaUsers size={20} />
                <h1 className='font-bold text-md'>Total Products</h1>
            </div>

            <div className='w-full h-full flex items-center justify-center flex-col gap-5'>
                <div className="w-[150px] h-[150px] relative">
                    <Doughnut data={data} />
                    <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center leading-none text-center mt-3">
                        <h1 className="text-[12px] font-bold">Total Users</h1>
                        <p className="text-[12px] ">{total}</p>
                    </div>
                </div>
                <div className='flex flex-row gap-5 w-full items-center justify-center'>
                    <div className='flex flex-row gap-2 items-center'>
                        <span className='w-[10px] h-[10px] rounded-full bg-[#4FD2B5]'></span>
                        <h1>Male</h1>
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <span className='w-[10px] h-[10px] rounded-full bg-[#FFCB49]'></span>
                        <h1>FeMale</h1>
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <span className='w-[10px] h-[10px] rounded-full bg-[#7464FF]'></span>
                        <h1>Others</h1>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TotalProducts