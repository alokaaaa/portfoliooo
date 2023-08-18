import React from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
const Contact = () => {
  return (
    
    <section className='section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div 
             variants={fadeIn('right',0.5)} 
             initial='hidden'
             whileInView={'show'}
             viewport={{once:false , amount:0.7}}
             className='flex-1 flex justify-start items-center'>
            <div>
               <h4 className=' text-xl uppercase text-accent font-medium gap-y-12
               mb-2 tracking-wide'>
              Get in Touch
            </h4>
            <h2 className='text-[45px] lg:text-[60px] mb-12' gap-y-6> Let's work
             <br /> together</h2>
            </div>
            </motion.div>
          <motion.form 
             variants={fadeIn('left',0.5)} 
             initial='hidden'
             whileInView={'show'}
             viewport={{once:false , amount:0.7}}
          className='flex-1 border rounded-2xl flex flex-col gap-y-6
          pb-24 p-6 items-start'> 
          <input type='text' className=' border-b bg-transparent py-3
          outline-none w-full placeholder:text-white
           focus:border-accent transition-all
          ' placeholder='your name'></input>
          <input type='text' className=' border-b bg-transparent py-3
          outline-none w-full placeholder:text-white
           focus:border-accent transition-all
          ' placeholder='your email'></input>

          <textarea className=' border-b bg-transparent py-12
          outline-none w-full placeholder:text-white
           focus:border-accent transition-all
           resize-none mb-12
          ' placeholder='your message'>

          </textarea>
          <button className='btn btn-lg'>send message</button>
          </motion.form>
        </div>



      </div>
       
    </section>
    );
};

export default Contact;
