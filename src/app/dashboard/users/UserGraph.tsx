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
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'New Users',
        data: [400, 300, 200, 278, 189, 239, 349, 400, 300, 200, 278, 189],
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
        <FaUsers size={20} />
        <h1 className='font-bold text-md'>Main graph monthly users</h1>
      </div>
      <Bar data={data} options={options} width="800px" height='250px' />
    </div>
  );
};

export default UserGraph;
