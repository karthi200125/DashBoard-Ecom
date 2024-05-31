'use client'

import React from 'react'
import { FaUsers } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const OrderGraph = () => {

    const data = [
        { month: 'Jan', users: 0 },
        { month: 'Feb', users: 0 },
        { month: 'Mar', users: 220 },
        { month: 'Apr', users: 278 },
        { month: 'May', users: 189 },
        { month: 'Jun', users: 239 },
        { month: 'Jul', users: 349 },
        { month: 'Aug', users: 400 },
        { month: 'Sep', users: 300 },
        { month: 'Oct', users: 200 },
        { month: 'Nov', users: 278 },
        { month: 'Dec', users: 189 },
    ];

    return (
        <div className='p-5 border bg-white rounded-[20px] w-full h-full'>
            <div className='flex flex-row items-center gap-2'>
                <FaUsers size={20} />
                <h1 className='font-bold text-md'>New users</h1>
            </div>

            <div className='w-full h-[280px] mt-5 ml-[-30px]'>
                <ResponsiveContainer width="100%" height="100%" >
                    <LineChart data={data} >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        {/* <Legend /> */}
                        <Line type="monotone" dataKey="users" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>


        </div>
    )
}

export default OrderGraph