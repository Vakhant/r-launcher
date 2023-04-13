import React, { useState } from 'react'
import css from '../css/ChosenServer.module.css'

const ChosenServer = ({nameColor, chosenServer, imgSrc, serverName, serverColloredComment, serverComment, star, active}) => {
  const [starAct, setStarAct] = useState(star)
  return (
    <div className={css.chosen_server_block+` ${active?css.chosen_server_block_act:''}`}>
        <div className={css.chosen_server + ` ${chosenServer==='FM'?css.serverFM:''}`}>
        {imgSrc?<img className={css.chosen_server_icon} width='154' height='124' src={imgSrc} alt="" />:'n'}
        <span className={css.server_name}>Rapid Motion<img onClick={()=>setStarAct(!starAct)} height={21} width={22} className={css.star} src={starAct?process.env.PUBLIC_URL+'/imgs/icons/main_page/star.svg':process.env.PUBLIC_URL+'/imgs/icons/main_page/star_grey.svg'} alt="" /></span>
        <div style={{"color" : nameColor}} className={css.server_second_name}>{serverName}</div>
      </div>
      <div className={css.server_comment}>
          {serverColloredComment?<div className={css.server_comment_ico}>{serverColloredComment}</div>:''}
          <div className={css.server_comment_txt}>{serverComment}</div>
      </div>
    </div>
  )
}

export default ChosenServer