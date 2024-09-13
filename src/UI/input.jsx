import React from 'react'

function Input({onchange, type, placeholder, className, value ,step}) {
  return (
    <input 
        type={type} 
        className={` ${className} w-[70px] text-sm bg-transparent backdrop-blur-md border border-gray-700 p-1 px-2 rounded focus:outline-none`} 
        placeholder={placeholder}
        onChange={onchange}
        autoComplete="Of"
        value={value}
        step={step}
    />
    
  )
}

export default Input