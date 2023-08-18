import React from 'react';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import { Button } from 'react-scroll';
const About = () => {
  const [ref,InView] = useInView({
    threshold:0.5,
  });
  return (
     <section
   className='section' id='about1' ref={ref}>
   <div className='container mx-auto'>
  <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center
 lg:gap-x-20 lg:gap-y-0 h-screen '>
      
      <motion.div 
         variants={fadeIn('right',0.3)} 
         initial='hidden'
         whileInView={'show'}
         viewport={{once:false , amount:0.3}}
      className=' flex-1 bg-ABOUTIITKGP bg-contain 
      bg-no-repeat h-[640px]
       mix-blend-lighten bg-top' ></motion.div>
      <motion.div
        variants={fadeIn('left',0.5)} 
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false , amount:0.3}}
      
      className='flex-1'><h2
       className='h2 text-accent'>
        About me
        </h2>
        <h3 className='h3 mb-4'>
        I am a college student
        </h3>

        <p className='mb-6'>
        I am a second year undergraduate student of the department of Civil Engineering at Indian Institute of Technology, Kharagpur. I am a Web Development Enthusiast . I am also a graphic designer.
         I am open to explore and learn new skillsets.
        </p>      
        <div className='flex gap-x-6 lg:gap-x-10 mb-12'>

          <div>
            <div className=' text-[40px] font-tertiary text-gradient mb-2'>
             { InView ?<CountUp start={0} end={3} duration={3} /> : null}
             </div>
             <div className='font-primary text-sm  tracking-[2px]'>Months of <br />
             Experience
             </div>
          </div>
          <div>
            <div className=' text-[40px] font-tertiary text-gradient mb-2'>
             { InView ?<CountUp start={0} end={2} duration={2} /> : null}
             </div>
             <div className='font-primary text-sm  tracking-[2px]'>2nd Year of <br />
             College
             </div>
          </div>
          <div>
            <div className=' text-[40px] font-tertiary text-gradient mb-2'>
             { InView ?<CountUp start={0} end={365} duration={4} /> : null}
             </div>
             <div className='font-primary text-sm  tracking-[2px]'> Projects <br />
            taken
             </div>
          </div>
        </div>
         <div className='flex gap-6 items-center'>
          <button className='btn btn-lg '>
            Contact me
          </button>
          <a href='#' className='text-gradient btn-link'>
           my Portfolio

          </a>
         </div>
        </motion.div>
       </div>
       </div>
      

 </section> );
};

export default About;
