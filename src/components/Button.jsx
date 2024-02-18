import React from 'react'

const Button = ({styles}) => {
  return (
    <div>
      <button type='button' className={`py-[6px] outline-none text-primary px-4 mt-10 rounded font-poppins font-medium text-[18px] bg-blue-gradient ${styles}`}>Get Started</button>
    </div>
  )
}

export default Button
// import React from "react";

// const Button = ({ styles }) => (
//   <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
//     Get Started
//   </button>
// );

// export default Button;
