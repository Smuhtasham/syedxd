import React from 'react'

export default function Navbar() {
  return (
    <>
    <div className=' bg-[#1A0B2E]'>
        <div className='w-[90%] m-auto flex justify-between items-center py-6'>
            <img className='w-[30px] cursor-pointer' src="logo.png" alt="" />
            <ul className='flex gap-12 text-white cursor-pointer text-base'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
    </>
  )
}
