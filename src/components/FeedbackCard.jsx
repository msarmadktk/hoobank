import { quotes } from "../assets";
import styles from "../style";
import { people02 } from "../assets";
const FeedbackCard = ({ content, name, title, img }) => (
  <div className={`flex flex-col  px-10 py-12 rounded-[20px] mb-0  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card`}>
    <img src={quotes} className={`w-[42.6px] h-[27.6px]`} alt="" />
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>{content}</p>

    <div className="flex flex-row mt-8 justify-between">
      <img src={img} className={`mr-4 h-[48px] w-[48px]`} alt="" />
      <div className="flex flex-col">
        <h2 className={`text-white text-[20px] font-poppins leading-[32px] font-normal`}>{name}</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-1`}>Founder & Leader </p>

      </div>
    </div>
  </div>
);


export default FeedbackCard;
