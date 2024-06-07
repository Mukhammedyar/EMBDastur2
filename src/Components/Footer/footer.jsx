import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { footerStyles } from '../../UI/footerStyles'

export default function Footer() {
  const [active1, setActive1] = useState(true)
  const [active2, setActive2] = useState(false)
  const [active3, setActive3] = useState(false)
  return (
    <div className={`flex text-gray-300 w-full justify-center md:justify-between lg:justify-between items-end ${footerStyles.responsiveStyle} bottom-1 px-2 fixed`}>
      <p className='text-xs  hidden md:flex lg:flex xl:flex item-center'>Last update: 7.06.2024 1:50</p>
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
      <p className='text-xs hidden md:flex lg:flex xl:flex item-center'>Version 2.401 offline version wi JSON Server</p>
    </div>
  )
}
