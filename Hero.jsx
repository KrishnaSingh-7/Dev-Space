import { ArrowRight, Sparkles } from 'lucide-react'
import React from 'react'

const Hero = () => {
  return (
    <div className='relative overflow-hidden bg-white'>
      <div className='max-w-full mx-auto'>
        <div className='relative z-10 pb-8 sm:pb-6 md:pb-20 lg:max-w-2xl
         lg:w-full lg:pb-28 xl:pb-32'>
          <main className='mt-10 mx-auto max-w-full px-4 sm:mt-12 sm:px-6 md:mt=16 lg:mt-20 lg:px-8
xl:mt-28'>
            <div className='  sm:text-center  '>
              <h1 className='text-4xl  tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
                <span className='block'>Build Faster With </span>
                <span className='block text-indigo-600'>Modern Tools</span>
              </h1>
              <p className='text-base text-gray-500 mt-3 sm:text-lg sm:max-w-xl
              sm:mx-auto md:mt-5 md:text-xl lg:mx-0
              
              '>
                Create beautiful responsive web application with
                our modern development platform. Start building
                your next big idea today</p>

              <div className='mt-5 sm:mt-8  sm:flex sm:justify-center lg-flex lg:justify-center'>
                <div className='rounded-md shadow-md'>
                  <button className='w-full flex items-center  justify-center px-3 py-3 border border-transparent text-base font-medium
   rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10  '>
                    Get Started
                    <ArrowRight className='ml-2 h-5 w-5 ' />
                  </button>

                </div>
                <div className='pl-2 sm:mt-0 sm:ml-3'>
                  <button className='w-full flex items-center  justify-center px-3 py-3 border border-transparent text-base font-medium
   rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-800 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10  '>
                    Live Demo
                    <Sparkles />
                    <ArrowRight className='ml-2 h-5 w-5 ' />
                  </button>

                </div>
              </div>
            </div>

          </main>
        </div>

      </div>

      <div className="relative w-full h-full lg:absolute lg:inset-y-2  lg:right-4 lg:w-auto">
  <img
    src="/programming_65t2.svg"
    alt="your image"
    className="object-cover pt-8 pb-8 
               w-full h-full 
               sm:w-full sm:h-full 
               md:h-96 
               lg:h-full lg:w-full"
  />
  
</div>

    </div>
  )
}

export default Hero