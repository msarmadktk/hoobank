import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (

  <section className={`${styles.paddingX} ${layout.section} flex md:flex-row flex-col justify-center items-center`}>

    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2} sm:leading-[75px] leading-[50px] max-w-[570px]`}>Find a better card deal in few easy steps.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>

      <Button styles="mt-10" />
    </div>

    <div className="sm:w-[50%] flex flex-row justify-center sm:mt-0 mt-[4rem] items-center">
      <img src={card} className="sm:ml-[4rem]" alt="" />
    </div>
  </section>

);

export default CardDeal;



// <section className={layout.section}>
//     <div className={layout.sectionInfo}>
//       <h2 className={styles.heading2}>
//         Find a better card deal <br className="sm:block hidden" /> in few easy
//         steps.
//       </h2>
//       <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
//         Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
//         aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
//       </p>

//       <Button styles={`mt-10`} />
//     </div>

//     <div className={layout.sectionImg}>
//       <img src={card} alt="billing" className="w-[100%] h-[100%]" />
//     </div>
//   </section>