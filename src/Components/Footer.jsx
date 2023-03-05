import React from 'react'
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter
} from 'react-icons/fa'

export default function Footer() {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#DF2E38]'>FAHAD.</h1>
                <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit harum officiis porro inventore veniam blanditiis commodi? Eaque nihil est placeat quaerat esse, necessitatibus iste sunt laborum vel, aperiam animi eum!</p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebook size={30} />
                    <FaGithub size={30} />
                    <FaInstagram size={30} />
                    <FaTwitter size={30} />
                </div>

            </div>
            <div className='lg:col-span-2  flex justify-between mt-6'>
                <div>
                <h6 className='font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>Insights</li>
                </ul>
                </div>
                <div>
                <h6 className='font-medium text-gray-400'>Support</h6>
                <ul>
                    <li className='py-2 text-sm'>Pricing</li>
                    <li className='py-2 text-sm'>Documentions</li>
                    <li className='py-2 text-sm'>Guides</li>
                    <li className='py-2 text-sm'>API Status</li>
                </ul>
                </div>
                <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Career</li>
                    <li className='py-2 text-sm'>Blogs</li>
                    <li className='py-2 text-sm'>Jobs</li>
                    <li className='py-2 text-sm'>Press</li>
                </ul>
                </div>
                <div>
                <h6 className='font-medium text-gray-400'>Legals</h6>
                <ul>
                    <li className='py-2 text-sm'>Claim</li>
                    <li className='py-2 text-sm'>Policy</li>
                    <li className='py-2 text-sm'>Terms</li>
                </ul>
                </div>
            </div>
        </div>
    )
}
