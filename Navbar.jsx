import { CircleDollarSign, Combine, Ghost, Github, Menu, X } from 'lucide-react'
import React, { useState } from 'react'

const Navbar = () => {

  const [isOpen, setisOpen] = useState(false);

  return (
    <nav className='fixed w-full  bg-white/80 backdrop-blur-md z-50
 shadow-sm'>
      <div className='max-w-full mx-auto px-4 sm:px-6 lg-px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* logo */}
          <div className='flex items-center'>
            <Github className='h-8 w-8 text-indigo-600' />
            <span className='ml-2 text-2xl font-bold text-gray-800'>DevSpace</span>
          </div>

          <div className='hidden md:block '>
            <div className='ml-10 flex items-center text-base font-bold  space-x-7'>
              <li className=' cursor-pointer list-none flex gap-1  hover:text-indigo-800  items-center   '>
                <Combine className='text-indigo-600  hover:text-indigo-800' />
                Feature</li>
              <li className='list-none flex cursor-pointer hover:text-indigo-800 items-center gap-1'>
                <Ghost className='text-indigo-600 hover:text-indigo-800' />
                Testimonials</li>
              <li className='list-none flex cursor-pointer  hover:text-indigo-800 items-center gap-2'>
                <CircleDollarSign className='text-indigo-600 hover:text-indigo-800' />
                Pricing</li>
              <button className='bg-indigo-600 cursor-pointer  text-white px-2 py-2 rounded-lg
       hover:bg-indigo-700 
       '
              >Get Started</button>
            </div>
          </div>

          <div className='md:hidden'>
            <button 
            onClick={()=>setisOpen(!isOpen)}
             className='inline-flex justify-center items-center rounded-md text-gray-400
             hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-indigo-500'
            >

              {
                isOpen ? <X className='h-5 w-5' />: <Menu className='h-6 w-6'/>
              }

            </button>
          </div>


        </div>
      </div>

      { isOpen  && <div className='md:hidden'>
        <div className='px-2 pt-2 pb-2 space-y-2  sm:px-3 shadow-md border  flex flex-col justify-center items-start'>

          <li className=' cursor-pointer list-none py-3 flex gap-1  w-full hover:text-indigo-800 hover:bg-indigo-50 rounded-md items-center   '>
            <Combine size={22} className='text-indigo-600  hover:text-indigo-800' />
            Feature</li>
          <li className='list-none flex py-3  w-full  cursor-pointer hover:text-indigo-800 hover:bg-indigo-50  rounded-md items-center gap-1'>
            <Ghost size={22} className='text-indigo-600 hover:text-indigo-800' />
            Testimonials</li>
          <li className='list-none flex py-3 w-full   cursor-pointer  hover:text-indigo-800 hover:bg-indigo-50 rounded-md items-center gap-2'>
            <CircleDollarSign size={22} className='text-indigo-600 hover:text-indigo-800' />
            Pricing</li>

          <button className='bg-indigo-600  w-full cursor-pointer  text-white px-2 py-2  rounded-lg
       hover:bg-indigo-700 
       '
          >Get Started</button>

        </div>

      </div>}

    </nav>
  )
}

export default Navbar