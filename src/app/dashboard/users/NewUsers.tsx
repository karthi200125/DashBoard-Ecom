'use client'

import React from 'react'
import { FaUsers } from 'react-icons/fa'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const NewUsers = () => {

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
    <div className='flex-1 h-full border bg-white rounded-[20px] p-5 overflow-hidden'>
      <div className='flex flex-row items-center gap-2'>
        <FaUsers size={20} />
        <h2>New users</h2>
      </div>

      <div className='w-[300px] h-[200px] mt-5 ml-[-30px]'>
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

export default NewUsers