import React from 'react'
import Laptop from '../assets/laptop.jpg'
export default function Analytics() {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
                <div className="flex flex-col justify-center">
                    <p className='text-[#DF2E38] font-bold '>DATA ANALYTIC DASHBOARD</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl py-2 font-bold'>Manage Data Analytics Centrally</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit harum officiis porro inventore veniam blanditiis commodi? Eaque nihil est placeat quaerat esse, necessitatibus iste sunt laborum vel, aperiam animi eum!</p>
                    <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 md:mx-0 text-[#DF2E38]'>Get Started</button>
                </div>
            </div>
        </div>
    )
}
