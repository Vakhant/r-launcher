import React from 'react'
import css from './css/Status.module.css'

const Status = ({statustxt}) => {
  return (
    <>
		<span className="status_txt">{statustxt}</span>
		<div className={css.status_icon + ' ' + css.status_icon_plat}><img width="18" height="18" src={process.env.PUBLIC_URL+"/imgs/icons/header/h_premium.svg"} alt={statustxt}/></div>
	  </> 
  )
}

export default Status