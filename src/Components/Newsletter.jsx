import React from 'react'

export default function Newsletter() {
    return (
        <div className='w-full py-16 text-white px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 py-4'>
                    <h1 className='font-bold md:text-4xl sm:text-3xl text-2xl py-2'>Want tips & Tricks to Optimize your flow?</h1>
                    <p>Sign up to our Newsletter and Stay up to date. </p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='p-3 flex rounded-md text-black w-full' type="email" placeholder='Enter Email' />
                        <button className='bg-[#DF2E38] w-[200px] rounded-md font-medium ml-4 my-6 py-3 px-6 text-black'>Notify Me</button>
                    </div>
                    <p>We care about the Protection of your data. Read our <span className='text-[#DF2E38]'>Privacy Policy.</span> </p>
                </div>
            </div>
        </div>
    )
}
