'use client';

import { useQuery } from '@tanstack/react-query';
import {
    ArcElement,
    Chart as ChartJs,
    Legend,
    Tooltip,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { FaUsers } from 'react-icons/fa';
import { genderCount } from '../../../../actions/dashboard/dashUser';

ChartJs.register(
    ArcElement,
    Tooltip,
    Legend
);


const TotalUser = () => {
    const { isPending, data } = useQuery({
        queryKey: ['gendercount'],
        queryFn: async () => await genderCount(),
    });

    const count = data?.genderCounts ?? { male: 0, female: 0, others: 0 };
    const users = data?.data ?? [];
   

    const graphData = {
        datasets: [{
            data: [count.male, count.female, count.others],
            backgroundColor: ["#4FD2B5", "#FFCB49", "#7464FF"],
            borderColor: ["#4FD2B5", "#FFCB49", "#7464FF"],
            cutout: '80%',
        }]
    };

    const total = users?.length;

    return (
        <div className='flex-1 h-full border bg-white rounded-[20px] p-5'>
            <div className='flex flex-row items-center gap-2'>
                <FaUsers size={20} />
                <h5>Total users</h5>
            </div>

            <div className='w-full h-full flex items-center justify-center flex-col gap-5'>
                <div className="w-[150px] h-[150px] relative">
                    <Doughnut data={graphData} />
                    <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center leading-none text-center mt-3">
                        <h6>Total</h6>
                        <h6>Users</h6>
                        <p>{total}</p>
                    </div>
                </div>
                <div className='flex flex-row gap-5 w-full items-center justify-center'>
                    <div className='flex flex-row gap-2 items-center'>
                        <span className='w-[10px] h-[10px] rounded-full bg-[#4FD2B5]'></span>
                        <div className="flex flex-col justify-center">
                            <h6>Male</h6>
                            <p>{count.male}</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <span className='w-[10px] h-[10px] rounded-full bg-[#FFCB49]'></span>
                        <div className="flex flex-col justify-center">
                            <h6>Female</h6>
                            <p>{count.female}</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <span className='w-[10px] h-[10px] rounded-full bg-[#7464FF]'></span>
                        <div className="flex flex-col justify-center">
                            <h6>Others</h6>
                            <p>{count.others}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TotalUser;
