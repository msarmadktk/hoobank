import React from 'react'
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const Business = () => {
  return (
    <section id='features' className={`${styles.paddingX} ${layout.section}`}>

      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} sm:leading-[75px] leading-[50px]`}>You do the business,<br className='sm:block hidden' /> we'll handle the money.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>

        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {
          features.map((features , index) => (
            <div key={features.id} className={`feature-card px-[2rem] py-[1rem] flex sm:flex-row flex-col justify-center rounded-[20px] items-center ${index !== features.length - 1 ? "mb-6" : "mb-0"} ${styles.flexCenter} bg-dimBlue `}>
              <div className='flex items-center '>
                <img className='mr-[1.5rem] mb-4  object-contain ' src={features.icon} alt="" />
              </div>
              <div className='flex flex-col mb-8'>
                <h3 className={`text-white font-poppins text-[18px] mb-2 font-bold leading-6`}>{features.title}</h3>
                <p className={`${styles.paragraph} max-w-[466px] text-[16px]`}>{features.content}</p>
              </div>
            </div>
          ))
        }
      </div>

    </section>
  )
}

export default Business