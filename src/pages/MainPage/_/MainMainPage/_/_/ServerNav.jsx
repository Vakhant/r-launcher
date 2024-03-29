import React from 'react'
import css from '../css/ServerNav.module.css'
import Select from './_/Select'
import Button from '../../../../../../components/_common/Button'

const ServerNav = ({chosenServer, setServer, serversList, serversListLength}) => {
  return (
    <div className={css.server_nav}>
      
      <Button customClasses={css.btn_play_wrap} actSttCls={css.btn_play_act} buttonStyle={'gradBtn'}
        content={<div className={css.button_play}>
        <img width={13} height={18} className={css.button_play_icon} src={process.env.PUBLIC_URL+'/imgs/icons/play_video.svg'} alt="" />
        <div className={css.button_play_txt}>Играть</div>
      </div>}
      actCntnt={<div className={css.button_play}><div className={css.button_play_txt}>Запущено</div></div>}
      />
          
          <Select serversListLength={serversListLength} chosenOption={chosenServer} optionList={serversList} optionFuction={setServer}/>
    </div>
  )
}

export default ServerNav