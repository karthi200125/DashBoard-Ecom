'use client';
import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useQuery } from '@tanstack/react-query';
import { getMonthlyUserCounts } from '../../../../actions/dashboard/dashUser';

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const UserGraph = () => {

  const { isPending, data } = useQuery({
    queryKey: ['getMonthlyUserCounts'],
    queryFn: async () => await getMonthlyUserCounts()
  })

  const userdata: any = data?.data

  const labels = userdata?.map((entry: any) => entry.month) || [];
  const datacount = userdata?.map((entry: any) => entry.users) || [];

  const userchartdata = {
    labels: labels,
    datasets: [
      {
        label: 'New Users',
        data: datacount,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className='w-full h-[350px] border bg-white rounded-[20px] p-5 flex flex-col gap-3 overflow-hidden'>
      <div className='flex flex-row items-center gap-2'>
        <FaUsers size={25} />
        <h5 >Main graph monthly users</h5>
      </div>
      <Bar data={userchartdata} options={options} width="800px" height='230px' />
    </div>
  );
};

export default UserGraph;
