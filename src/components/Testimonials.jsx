import React from 'react';
import { feedback } from '../constants';
import styles, { layout } from '../style';
import Feedbackcard from './Feedbackcard';


const Testimonials = () => {
  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient'/>
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h1 className={styles.heading2}>
        What people are <br className='sm:block hidden'/> saying about us.
        </h1>
        <div className='w-full md:mt-o mt-6'>
          <p className={`${styles.paragraph} max-w-[450px] text-left`}>
            Everything you need to accept card payments and grow your business anywhere on the planet.
          </p>
        </div>
      </div>
      <div className=' flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
        {feedback.map((feedback, index) => {
          return(
            <Feedbackcard key={feedback.id} {...feedback}/>
          )
        })}
      </div>
    </section>
    
  )
}

export default Testimonials