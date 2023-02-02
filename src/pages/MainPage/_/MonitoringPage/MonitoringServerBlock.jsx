import React from 'react'
import Button from './../../../../components/_common/Button'
import css from './css/MonitoringServerBlock.module.css'

const MonitoringServerBlock = ({infoCall, imgSrc, serverName, serverColloredComment, star, nameColor, chosen}) => {
  return (
    <div className={css.server_block + ` ${chosen?css.server_block_chosen:''}`}>
    <div style={{"background": `linear-gradient(90deg, ${nameColor}30, transparent)`}} className={css.server_block_bg}></div>
      <div className={css.server_block_img}><img src={imgSrc} alt="" /></div>
      <div className={css.server_main_info}>
        <div style={{"color": nameColor}} className={css.server_name}>{serverName}</div>
        <div className={css.server_users_number}>Игроков онлайн <span>300 / 300</span></div>
      </div>
      
      <div className={css.server_vip_wrap}>
        <img className={css.server_vip} src={star?"/imgs/icons/main_page/star.svg":'/imgs/icons/monitoring/star.svg'} alt="" />
        <button className={css.server_vip_info}>
          {serverColloredComment}
        </button>
        {serverColloredComment?<button onClick={()=>infoCall(true)} className={css.server_vip_info_btn}>
          <img src={"/imgs/icons/monitoring/info_server.svg"} alt="" />
        </button>:<div></div>}
      </div>
      
      {chosen?<button className={css.button_play}>
        <img width={13} height={15} className={css.button_play_icon} src={'/imgs/icons/play_video.svg'} alt="" />
        <div className={css.button_play_txt}>Играть</div>
      </button>:""}
      <Button customClasses={css.monitoring_btn} buttonStyle={'greyBtn'} style={{}} content={<>
        {chosen?"Сервер выбран":"Выбрать сервер"}
        <img width={13} height={13} className={css.btns_imgs} 
          src={chosen?'/imgs/icons/main_page/select_check-mark.svg':'/imgs/icons/popup_main_close.svg'} alt=""/>
      </>}/>
    </div>
  )
}

export default MonitoringServerBlock