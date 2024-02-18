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
      <p className={`font-poppins font-normal text-dimWhite text-[16px] mb-4 leading-[30.8px]`}>Copyright © 2021 HooBank. All Rights Reserved.</p>
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



// <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
//     <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
//       <div className="flex-[1] flex flex-col justify-start mr-10">
//         <img
//           src={logo}
//           alt="hoobank"
//           className="w-[266px] h-[72.14px] object-contain"
//         />
//         <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
//           A new way to make the payments easy, reliable and secure.
//         </p>
//       </div>

//       <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
//         {footerLinks.map((footerlink) => (
//           <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
//             <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
//               {footerlink.title}
//             </h4>
//             <ul className="list-none mt-4">
//               {footerlink.links.map((link, index) => (
//                 <li
//                   key={link.name}
//                   className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
//                     index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
//                   }`}
//                 >
//                   {link.name}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>

//     <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
//       <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
//         Copyright Ⓒ 2022 HooBank. All Rights Reserved.
//       </p>

//       <div className="flex flex-row md:mt-0 mt-6">
//         {socialMedia.map((social, index) => (
//           <img
//             key={social.id}
//             src={social.icon}
//             alt={social.id}
//             className={`w-[21px] h-[21px] object-contain cursor-pointer ${
//               index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
//             }`}
//             onClick={() => window.open(social.link)}
//           />
//         ))}
//       </div>
//     </div>
//   </section>