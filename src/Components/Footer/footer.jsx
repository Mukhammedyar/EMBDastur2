import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { footerStyles } from '../../UI/footerStyles'

export default function Footer() {
  const [active1, setActive1] = useState(true)
  const [active2, setActive2] = useState(false)
  const [active3, setActive3] = useState(false)
  return (
<<<<<<< HEAD
    <div className={`flex text-gray-300 w-full justify-center items-end ${footerStyles.responsiveStyle} bottom-1 px-2 fixed`}>
      <p className='text-xs hidden md:flex absolute bottom-0 left-5 lg:flex xl:flex item-center'>Last update: 13.09.2024 23:54</p>
=======
    <div className={`flex text-gray-300 w-full justify-center md:justify-between lg:justify-between items-end ${footerStyles.responsiveStyle} bottom-1 px-2 fixed`}>
      <p className='text-xs  hidden md:flex lg:flex xl:flex item-center'>Last update: 7.06.2024 1:50</p>
>>>>>>> be6bfb195b9bfe87427cf1e6f3cfc4a1b9b5ccdb
      <div className={`flex justify-between ${footerStyles.backgroundStyle} ${footerStyles.defaultStyles} ${footerStyles.responsiveWidth}`}>
        <Link 
          onClick={() => {setActive1(true); setActive2(false); setActive3(false)}} 
          className={`${active1 ? footerStyles.borderBottomStyle : ""} ${footerStyles.defaultStyles}`} 
          to={"/"}>
            <p>1-Jadval</p>
          </Link>
        <Link 
          onClick={()=> { setActive1(false); setActive2(true); setActive3(false)}} 
          className={`${active2 ? footerStyles.borderBottomStyle : ""} ${footerStyles.defaultStyles}`} 
          to={"/list2"}>
            <p>2-Jadval</p>
          </Link>
        <Link 
          onClick={()=> { setActive1(false); setActive2(false); setActive3(true)}} 
          className={`${active3 ? footerStyles.borderBottomStyle : ""} ${footerStyles.defaultStyles}`} 
          to={"/list3"}>
            <p>3-Jadval</p>
          </Link>
      </div>
<<<<<<< HEAD
      <p className='text-xs absolute bottom-0 right-0 hidden md:flex lg:flex xl:flex item-center'>Currentv:2.5 prev version: v:2.401 with JSON Server</p>
=======
      <p className='text-xs hidden md:flex lg:flex xl:flex item-center'>Version 2.401 offline version wi JSON Server</p>
>>>>>>> be6bfb195b9bfe87427cf1e6f3cfc4a1b9b5ccdb
    </div>
  )
}
