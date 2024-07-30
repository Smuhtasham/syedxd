import React from 'react'

export default function Footer() {
  return (
        <>
        <div className='bg-[#11071F]'>
            <div className='w-[90%] m-auto flex flex-col text-white gap-6 py-32'>
                <div className='text-2xl font-semibold'>Contact</div>
                <div className='w-[400px] text-xs '>I'm currently looking to join a cross-functional team that values improving people's lives
                through accessible design. or have a project in mind? </div>
                <div className=''>Let's connect.</div>
                <div className='font-bold'>muhtasham00@gmail.com</div>
                <div className='flex gap-10 pt-3'>
                    <img className='w-[20px]' src="insta.svg" alt="" />
                    <img className='w-[20px]' src="ball.svg" alt="" />
                    <img className='w-[20px]' src="google.svg" alt="" />
                </div>
            </div>
        </div>
        </>
  )
}
