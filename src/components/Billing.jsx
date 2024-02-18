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

// import { apple, bill, google } from "../assets";
// import styles, { layout } from "../style";

// const Billing = () => (
//   <section id="product" className={layout.sectionReverse}>
//     <div className={layout.sectionImgReverse}>
//       <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

//       {/* gradient start */}
//       <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
//       <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
//       {/* gradient end */}
//     </div>

//     <div className={layout.sectionInfo}>
//       <h2 className={styles.heading2}>
//         Easily control your <br className="sm:block hidden" /> billing &
//         invoicing
//       </h2>
//       <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
//         Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
//         aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
//         placerat.
//       </p>

//       <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
//         <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
//         <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
//       </div>
//     </div>
//   </section>
// );

// export default Billing;
