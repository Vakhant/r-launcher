import React, { useState } from 'react'
import Button from './../../../../components/_common/Button'
import css from './css/MonitoringServerBlock.module.css'
import ServerBlockBR from './ServerBlockBR'

const MonitoringServerBlock = ({keyN, id, setChosenServer, infoCall, imgSrc, serverName, serverColloredComment, star, nameColor, chosen}) => {
  const [starAct, setStarAct] = useState(star)
  const [btnAct, setBtnAct] = useState(true)
  

  let sBg = keyN === "NF"?"#182842":keyN === "FM"?"#332e16":keyN === "VH"?"#303133":false
  let sBr = keyN === "NF"?"#6089CC":keyN === "FM"?"#90885f":keyN === "VH"?"#989BA0":false
  return (
    <div className={css.server_block + ` ${chosen?css.server_block_chosen:''}`}>
      <ServerBlockBR chosenSrvr={chosen} bgColor={sBg} brColor={sBr}/>
      <div className={css.server_block_img}><img src={imgSrc} alt="" /></div>
      <div className={css.server_main_info}>
        <div style={{"color": nameColor}} className={css.server_name}>{serverName}</div>
        <div className={css.server_users_number}>Игроков онлайн <span>300 / 300</span></div>
      </div>

      <div className={css.server_vip_wrap}>
        <img onClick={()=>setStarAct(!starAct)} className={css.server_vip} src={starAct?process.env.PUBLIC_URL+"/imgs/icons/monitoring/star.svg":process.env.PUBLIC_URL+"/imgs/icons/monitoring/star_grey.svg"} alt="" />
        <button className={css.server_vip_info}>
          {serverColloredComment}
        </button>
        {serverColloredComment?<button onClick={()=>infoCall(true)} className={css.server_vip_info_btn}>
          <img src={process.env.PUBLIC_URL+"/imgs/icons/monitoring/info_server.svg"} alt="" />
        </button>:<div></div>}
      </div>

      <button onClick={()=>setBtnAct(!btnAct)} className={css.button_play+` ${chosen?css.button_play_chosen:""}`+` ${btnAct?css.button_play_act:""}`}>
      {btnAct?"Запущено":<><img width={11} height={14} className={css.button_play_icon} src={process.env.PUBLIC_URL+'/imgs/icons/play_game.svg'} alt="" />
        <div className={css.button_play_txt}>Играть</div></>}
      </button>
      <Button dis={chosen} presetActStt={chosen} onClickFunPrms={id} onClickFun={setChosenServer} actSttCls={css.monitoring_btn_act} customClasses={css.monitoring_btn} buttonStyle={'btnAct'} style={{}} 
      content={<>Выбрать сервер <img style={{'marginRight':'3px'}} width={12} height={12} className={css.btns_imgs} src={process.env.PUBLIC_URL+'/imgs/icons/popup_main_close.svg'} alt=""/></>}
      actCntnt={<>Сервер выбран <img style={{'marginRight':'1px'}} width={16} height={12} className={css.btns_imgs} src={process.env.PUBLIC_URL+'/imgs/icons/main_page/select_check-mark.svg'} alt=""/></>}
      />
    </div>
  )
}

export default MonitoringServerBlock