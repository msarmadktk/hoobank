import styles from "../style";
import { arrowUp } from "../assets";




const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} text-gradient cursor-pointer bg-blue-gradient  w-[140px] h-[140px] rounded-full`}>
      <div className={`${styles.flexCenter} bg-primary flex-col w-[130px] h-[130px] rounded-full`}>

        <div className="flex">
            <p className="flex font-semibold tracking-wider">
              <span className="text-gradient">Get</span>
              <img className="ml-[6px]" src={arrowUp} alt="" />
            </p>
        </div>

        <div className="flex">
            <p className="flex">
              <span className="font-semibold tracking-wider text-gradient">Started</span>
            </p>
        </div>
      </div>
    </div>
  )
}

export default GetStarted
