import {  Code, Shield, Smartphone, Zap } from 'lucide-react'
import React from 'react'

const feature =[{
  name:'Lightning Fast',
  description:'Built with performance in mind, ensuring your application run at peak efficiency',
  icon:Zap,
},
{
  name:'Secure by Default',
  description:'Enterprise grade security feature built-in to protect your date and users',
  icon:Shield,
},
{
  name:'Responsive Design',
  description:'Fully responsive component that work semlessly across all devices',
  icon:Smartphone,
},
{
  name:'Modern Development',
  description:'Using the latest web technologies and best practice in development',
  icon:Code
}
]

const Feature = () => {
  return (
    <section id='feature' className='py-20 bg-gray-50'>
      <div className='container mx-auto py-4 sm:px-7 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-blue-600 text-base font-semibold tracking-wide uppercase'>
            features
          </h2>
          <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight
           text-gray-900 sm:text-4xl lg:text-5xl'>Everything you need to succeed</p>
           <p className='max-w-2xl text-xl text-gray-600 lg:mx-auto mt-4'>Our platform provides all the tools 
            and features you need to build amazing application</p>
        </div>

<div className='mt-20'>
  <div className='grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 '>
  {feature.map((item, index) => (
              <FeatureCard
                key={index}
                name={item.name}
                description={item.description}
                icon={item.icon}
              />
            ))}

  </div>
</div>

      </div>
    </section>
  )
}

export default Feature

const FeatureCard=({name,description,icon:Icon})=>{
  return(
    <div className='bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl hover:shadow-indigo-300
     transition-all duration-300'>
      <div className='flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4'>
        <Icon className='w-6 h-6' />
      </div>
      <h3 className='text-lg font-semibold text-gray-900'>{name}</h3>
      <p className='mt-2 text-gray-600 text-sm'>{description}</p>
    </div>
  )
}