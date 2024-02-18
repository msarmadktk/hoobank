import React from 'react'
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";


const Billing = () => {
  return (
    <section className={`${styles.paddingX} ${layout.section} flex md:flex-row flex-col justify-between items-center`}>
      <div>
        <img src={bill} className='' alt="" />
      </div>

      <div className='flex flex-col'>
        <h2 className={`${styles.heading2} mb-8 sm:leading-[75px] leading-[50px]`}>Easily control your billing & invoicing.</h2>
        <p className={`${styles.paragraph}`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>

        <div className={`mt-[2rem] flex sm:flex-row flex-col sm:justify-start justify-center sm:items-start items-center`}>
          <img src={apple} alt="" className='sm:mb-0 mb-[1rem]'/>
          <img src={google} alt="" className='sm:ml-12 ml-0'/>
        </div>
      </div>
    </section>
  )
}

export default Billing
