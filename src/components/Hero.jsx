import React from 'react'
import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'
const Hero = () => {
  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingY} `} id='home'>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center px-[17px] py-[6px] bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} className="w-[32px] h-[32px]" alt="" />
          <p className={`${styles.paragraph} ml-2`}><span className='text-white'>20%</span> Dicount for {" "} <span className='text-white'>1 MONTH for {" "} </span>Account</p>

        </div>

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold xl:text-[62] md:text-[55px] text-[42px] text-white ss:leading-[80px] leading-[50px]'>The Next <br className='sm:block hidden' /> <span className='text-gradient'>Generation</span></h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
              <GetStarted />
          </div>
        </div>

        <h1 className='font-poppins font-semibold xl:text-[62] md:text-[55px] text-[42px] text-white ss:leading-[80px] leading-[50px] w-full'>Payment Method </h1>
        <p className={`${styles.paragraph} mt-8 max-w-[470px]`}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>


      </div>
      {/* Right side */}
      <div className={`flex-1 flex ${styles.flexCenter} relative md:my-0 my-10`}>
          <img className={`mt-4 w-full h-full relative z-[5]`} src={robot} alt="billing" />

          <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
          <div className='absolute z-[1] w-[80%] h-[85%] rounded-full bottom-40 white__gradient'></div>
          <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 top-0 blue__gradient'></div>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted className />

      </div>

      
    </section>
  )
}

export default Hero