import styles from "../style";
import { logo } from "../assets";
import { footerdata, footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`flex flex-col ${styles.paddingX} `}>

    <div className="flex md:flex-row sm:flex-row flex-col">

      <div className={`flex flex-col md:mb-0 sm:mb-0 mb-8`}>
        <img className="w-[150px] h-[72px]" src={logo} alt="" />
        <p className={`${styles.paragraph} max-w-[312px]`}>A new way to make the payments easy, reliable and secure.</p>
      </div>

      <div className={`flex flex-row flex-wrap justify-around w-[100%] items-center`}>
        {
          footerdata.map((footerd , index) => (
            <div key={footerd.id} className={`flex flex-col items-start justify-center mb-8 ${index === footerdata.length - 1 ? "sm:mt-[-0rem] md:mt-[-0rem] mt-0" : "mt-[0rem]"}`}>

              <h2 className={`text-white font-semibold text-[18px] border-b-[1px]`}>{footerd.title}</h2>
              <p className={`cursor-pointer font-poppins font-normal text-dimWhite text-[15px] leading-[30.8px] `}>{footerd.link1}</p>
              <p className={`cursor-pointer font-poppins font-normal text-dimWhite text-[15px] leading-[30.8px] `}>{footerd.link2}</p>
              <p className={`cursor-pointer font-poppins font-normal text-dimWhite text-[15px] leading-[30.8px] `}>{footerd.link3}</p>
              <p className={`cursor-pointer font-poppins font-normal text-dimWhite text-[15px] leading-[30.8px] `}>{footerd.link4}</p>
              <p className={`cursor-pointer font-poppins font-normal text-dimWhite text-[15px] leading-[30.8px] `}>{footerd.link5}</p>
            </div>
          ))
        }
      </div>

    </div>

    <div className={`w-full h-full font-poppins mt-8 mb-8 border-b-[1px] text-white`}> </div>

    <div className="flex md:flex-row sm:flex-row flex-col w-full justify-between items-center">
      <p className={`font-poppins font-normal text-dimWhite text-[16px] mb-4 leading-[30.8px]`}>Copyright © 2024 HooBank. Made by Databot with 🔥.</p>
      <div className="flex flex-row md:w-[30%] sm:w-[30%] w-[50%] mb-4 justify-around items-center">
          {
            socialMedia.map((socialIcon , index)=>(
              <a href={socialIcon.link} target="_blank" rel="noopener noreferrer">
              <img src={socialIcon.icon} alt={socialIcon.icon} />
            </a>
            
            ))
          }
      </div>
    </div>

  </section>
);

export default Footer;

