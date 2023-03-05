import React from 'react'
import Typed from 'react-typed';

export default function Hero() {
    return (
        <div className='text-white'>
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className='text-[#DF2E38]  font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with Data</h1>
                <div className='flex justify-center py-4'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold '>Fast, flexible financing for</p>
                    <Typed className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-600 md:pl-4 pl-2' strings={['BTC', 'SASS', 'BTB']} typeSpeed={120} backSpeed={120} loop />
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-600'>Monitor your data analytics to increase Revenue for BTB, BTC & SASS Plateforms.</p>
                <button className='bg-[#DF2E38] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
                    Get Started
                </button>
            </div>
        </div>
    )
}
