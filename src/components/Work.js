import React from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
// import Img1 from '../assets/portfolio-img1.png'
// import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'
import Img1 from '../assets/download.jpeg'
import Img2 from '../assets/programming.webp'
const Work = () => {
  return ( 
  
  
  <section className='section' id='work'>
    <div className=' container mx-auto'>
    <div className='flex flex-col lg:flex-row gap-x-10'>
      <motion.div
       variants={fadeIn('left',0.3)} 
       initial='hidden'
       whileInView={'show'}
       viewport={{once:false , amount:0.3}}
        className='flex flex-1 flex-col
       gap-y-12 mb-10 lg:mb-0'>
         <div>
          <h2 className=' text-accent h2 leading-tight'>
          My   <br />
          Skills
          </h2>
        <p> These are some of the skill-sets
           which I am trying to explore and learn.
        I am a passionate student trying to pursue and gain 
        more and more skills towards web development everyday.

        </p>
        <button className=' btn btn-sm'> View your Project</button>
         </div>
         <div className=' group relative overflow-hidden boreder-2
          border-white/50 rounded-xl'>
          <div className=' group-hover:bg-black/70 
          w-full h-full absolute z-40 transition-all duration-300'>
             </div>

          <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='' />
          <div className=' absolute -bottomm-full left-12 group-hover:bottom-24 
          z-50 transition-all duration-500'>
             <span className='text-gradient'> WEB Development</span></div>
          <div className=' absolute -bottomm-full left-12 group-hover:bottom-14 
          z-50 transition-all duration-700'> 
            <span className='text-3xl  text-white' >HTML,CSS,JAVASCRIPT,REACTJS</span>
          </div>
         </div>
      </motion.div>
      <motion.div
       variants={fadeIn('right',0.3)} 
       initial='hidden'
       whileInView={'show'}
       viewport={{once:false , amount:0.3}}
       className=' flex-1 flex-col gap-y-10'>2
      <div className=' group relative overflow-hidden boreder-2
          border-white/50 rounded-xl'>
          <div className=' group-hover:bg-black/70 
          w-full h-full absolute z-40 transition-all duration-300'>
             </div>

          <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt='' />
          <div className=' absolute -bottomm-full left-12 group-hover:bottom-24 
          z-50 transition-all duration-500'>
             <span className='text-gradient'> PROGRAMMING</span></div>
          <div className=' absolute -bottomm-full left-12 group-hover:bottom-14 
          z-50 transition-all duration-700'> 
            <span className='text-3xl  text-white' >C,C++</span>
          
         

           

          </div>
  
          
         </div>
         </motion.div>
         </div>

     </div>
    
  </section>);
};

export default Work;
