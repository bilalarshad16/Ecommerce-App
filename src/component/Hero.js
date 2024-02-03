import React from 'react'
import WomanImg from '../img/woman_hero.png';
import ManImg from '../img/men.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='bg-pink-200 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className='container mx-auto flex justify-around h-full'>
        <div className='flex flex-col justify-center '>
          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 h-[2px] bg-red-500 mr-3'>NewTrend</div>
          </div>
          <h1 className='text-[70px] leading[1.1] font-light mb-4'>IT IS MORE THAN JUST <br /> <span className='font-semibold'>SALES</span> 
          </h1>

          <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-primary'>
            Discover More
          </Link>
        </div>
        <div className='hidden  lg:block'>
          <img src={ManImg} alt='' className='h-[600px]' />
        </div>
      </div>
    </section>
  )
}

export default Hero