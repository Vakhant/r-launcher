import React from 'react'
import css from './css/SocForum.module.css'

const SocForum = () => {
  return (
    <div className={css.soc_forum}>
        <a href="#"><img width="26" height="27" src={process.env.PUBLIC_URL+'/imgs/icons/aside/support.svg'} alt=""/></a>
        <a href="#"><img width="26" height="24" src={process.env.PUBLIC_URL+'/imgs/icons/aside/forum.svg'} alt=""/></a>
    </div>
  )
}

export default SocForum