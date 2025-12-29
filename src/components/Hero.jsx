import React from 'react'
import assets from '../assets/assets'

const Hero = () => {
  return (
    <div id='hero' className='flex flex-col gap-6 py-20 items-center px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white'>

      <div className='inline-flex items-center border border-gray-300 p-1.5 pr-4 rounded-full gap-2'>
        <img className='w-20' src={assets.group_profile} alt="" />
        <p className='text-xs font-medium'>Trusted by 10k+ people</p>
      </div>
    </div>
  )
}

export default Hero