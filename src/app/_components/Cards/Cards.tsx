import React from 'react'
import Card from './Card'
import CardSkeleton from './CardSkeleton';

interface CardsProps {
    products?: any;
    isLoading?: boolean;
}

const Cards = ({ products, isLoading }: CardsProps) => {

    return (
        <div className='w-full min-h-screen p-2 md:p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {isLoading ?
                Array(8).fill(0).map((_, index) => (
                    <CardSkeleton key={index} />
                ))
                :
                products?.length > 0 ?
                    products?.map((card: any) => (
                        <Card key={card?.id} card={card} />
                    ))
                    :
                    <div className='h-[100px] flex items-center justify-center text-xl font-bold mx-auto w-full'>
                        No Products
                    </div>
            }
        </div>
    )
}

export default Cards