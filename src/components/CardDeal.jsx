import React from 'react';
import { card } from '../assets';
import Button from "./Button";
import styles, { layout } from '../style';


const CardDeal = () => {
  return (
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
          Find a better card deal <br className='sm:block hidden'/> in few easy steps.
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          <Button styles='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
          <img src={card} alt="billing" className='w-[100%] h-[100%] relative z-[5]'/>
          <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
          <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
        </div>
    </section>
    
  )
}

export default CardDeal