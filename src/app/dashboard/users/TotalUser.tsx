import React from 'react'
import { FaUsers } from 'react-icons/fa'

const TotalUser = () => {
    return (
        <div className='flex-1 h-full border bg-white rounded-[20px] p-5'>
            <div className='flex flex-row items-center gap-2'>
                <FaUsers size={20} />
                <h1 className='font-bold text-md'>Total users</h1>
            </div>

            <div className='w-full h-full flex items-center justify-center relative'>
                <div className="dot"></div>
                <svg className=''>
                    <circle cx='70' cy="70" r="70"></circle>
                    <circle cx='70' cy="70" r="70"></circle>
                </svg>
            </div>
        </div>
    )
}

export default TotalUser