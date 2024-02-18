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


