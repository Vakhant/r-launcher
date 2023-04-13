import React from 'react'
import css from "./ServerBlockBR.module.css";

const ServerBlockBR = ({chosenSrvr=true, bgColor="#182842", brColor="#6089CC"}) => {
  return (
    <svg className={css.br} width="812" height="106" viewBox="0 0 812 106" fill="none" xmlns="http://www.w3.org/2000/svg">
      
      {chosenSrvr?<><g opacity="0.54">
      <path d="M812 0H0V106H812V0Z" fill="url(#paint0_linear_530_22)"/>
      <path d="M809 3V103H3V3H809ZM812 0H0V106H812V0Z" fill="url(#paint1_linear_530_22)"/>
      </g>
      <defs>
      <linearGradient id="paint0_linear_530_22" x1="0" y1="53" x2="812" y2="53" gradientUnits="userSpaceOnUse">
      <stop stopColor={bgColor}/>
      <stop offset="1" stopColor={bgColor} stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="paint1_linear_530_22" x1="0" y1="53" x2="812" y2="53" gradientUnits="userSpaceOnUse">
      <stop stopColor={brColor}/>
      <stop offset="1" stopColor="#8D8D8D"/>
      </linearGradient>
      </defs></>:
      <g opacity="0.24">
      <path d="M809 3V103H3V3H809ZM812 0H0V106H812V0Z" fill="#fff"/>
      </g>}
      
    </svg>
  )
}

export default ServerBlockBR