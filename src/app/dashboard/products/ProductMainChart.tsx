'use client';

import { useQuery } from '@tanstack/react-query';
import { FaUsers } from 'react-icons/fa';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { getMainGraphProducts } from '../../../../actions/dashboard/dashProduct';

const ProductMainChart = () => {

    const { isPending, data } = useQuery({
        queryKey: ['getmaingraphproducts'],
        queryFn: async () => await getMainGraphProducts()
    })

    return (
        <div className='p-5'>
            <div className='flex flex-row items-center gap-2'>
                <FaUsers size={25} />
                <h5>Products Graph</h5>
            </div>

            <div className='w-full h-[280px] mt-5 ml-[-30px] text-[10px]'>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data?.data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="products" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default ProductMainChart;
