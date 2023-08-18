import React from 'react';
import {BsArrowUpRight} from 'react-icons/bs'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import { Link } from 'react-scroll';
const services=[
{
  name : 'IIT Kharagpur',

  description: 
  'Currently a Second Year Undergraduate, pursuing my Dual Degree of the Department of Civil Engineering',
  
  link: 'Learn more',

},

{
  name : 'Sunrays High School',

  description: 
  'Passed my 10 th board exAMINATION',
  
  link: 'Learn more',

},
{
  name : 'Youtube',

  description: 
  'Cleared JEE from Youtube videos',
  
  link: 'Learn more',

}

]
const Services = () => {
  return ( <div className='section' id='services'>
   <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        <motion.div 
          variants={fadeIn('right',0.3)} 
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false , amount:0.3}}
        
        className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat
        mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 mb-6 text-accent'>
          MY EDUCATION.
            </h2>
            <h3 className='h3  text-black/70 max-w-[455px] mb-16'>
            I am currently a student of IIT Kharagpur.
            </h3>
            <a   href='https://www.iitkgp.ac.in/'  className='btn btn-sm'>
               See My College

            </a>
        </motion.div>
         <motion.div 
           variants={fadeIn('left',0.5)} 
           initial='hidden'
           whileInView={'show'}
           viewport={{once:false , amount:0.3}}
         
         className='flex-1'>
             <div>
              {
                services.map((service,index)=>{
                  const {name,description,link} = service;
                 return ( <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                   <div className='max-w-[476px]'>

                    <h4 className='text-[20px] tracking-wider font-primary
                     font-semibold mb-6'>{name}</h4>
                    <p className=' font-secondary leading-tight'>{description}</p>
                   </div>
                   <div className='flex flex-1 flex-col items-end'> 
                    <a href='#' className='btn w-9 h-9 mb-[42px]
                    flex justify-center items-center'> <BsArrowUpRight /></a>
                         <a href='#'  className='text-gradient text-sm'>{link}</a>
                   </div>

                 </div>
                 );
                })
              }
             </div>

         </motion.div>
      </div>

   </div>

  </div>);
};

export default Services;
