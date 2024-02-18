import React from 'react'

const Button = ({styles}) => {
  return (
    <div>
      <button type='button' className={`py-[6px] outline-none text-primary px-4 mt-10 rounded font-poppins font-medium text-[18px] bg-blue-gradient ${styles}`}>Get Started</button>
    </div>
  )
}

export default Button
