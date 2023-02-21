import React from 'react'
import css from '../css/ChosenServer.module.css'

const ChosenServer = ({imgSrc, serverName, serverColloredComment, serverComment, star}) => {
  return (
    <>
      <div className={css.chosen_server}>
      {imgSrc?<img className={css.chosen_server_icon} width='154' height='124' src={imgSrc} alt="" />:'n'}
      <span className={css.server_name}>Rapid Motion{star?<img height={21} width={22} className={css.star} src={process.env.PUBLIC_URL+'/imgs/icons/main_page/star.svg'} alt="" />:''}</span>
      <div className={css.server_second_name}>{serverName}</div>
      </div>
      <div className={css.server_comment}>
          {serverColloredComment?<div className={css.server_comment_ico}>{serverColloredComment}</div>:''}
          <div className={css.server_comment_txt}>{serverComment}</div>    
      </div>
    </>
  )
}

export default ChosenServer