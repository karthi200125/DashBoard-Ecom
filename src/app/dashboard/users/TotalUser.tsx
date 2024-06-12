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

const TotalUser = () => {

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
        <div className='flex-1 h-full border bg-white rounded-[20px] p-5'>
            <div className='flex flex-row items-center gap-2'>
                <FaUsers size={20} />
                <h2>Total users</h2>
            </div>

            <div className='w-full h-full flex items-center justify-center flex-col gap-5'>
                <div className="w-[150px] h-[150px] relative">
                    <Doughnut data={data} />
                    <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center leading-none text-center mt-3">
                        <h4>Total Users</h4>
                        <p>{total}</p>
                    </div>
                </div>
                <div className='flex flex-row gap-5 w-full items-center justify-center'>
                    <div className='flex flex-row gap-2 items-center'>
                        <span className='w-[10px] h-[10px] rounded-full bg-[#4FD2B5]'></span>
                        <h4>Male</h4>
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <span className='w-[10px] h-[10px] rounded-full bg-[#FFCB49]'></span>
                        <h4>FeMale</h4>
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <span className='w-[10px] h-[10px] rounded-full bg-[#7464FF]'></span>
                        <h4>Others</h4>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TotalUser