import React from 'react'
import Card from './Card'

const Cards = () => {
    return (
        <div className='w-full min-h-screen p-2 md:p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default Cards