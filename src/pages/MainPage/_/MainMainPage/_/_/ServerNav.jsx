import React from 'react'
import css from '../css/ServerNav.module.css'
import Select from './_/Select'
import Button from '../../../../../../components/_common/Button'

const ServerNav = ({chosenServer, setServer, serversList}) => {
  return (
    <div className={css.server_nav}>
      
      <Button customClasses={css.btn_play_wrap} actSttCls={css.btn_play_act} buttonStyle={'gradBtn'}
        content={<div className={css.button_play}>
        <img width={15} height={24} className={css.button_play_icon} src={'/imgs/icons/play_video.svg'} alt="" />
        <div className={css.button_play_txt}>Играть</div>
      </div>}
      actCntnt={<div className={css.button_play}><div className={css.button_play_txt}>Запущено</div></div>}
      />
          
          <Select chosenOption={chosenServer} optionList={serversList} optionFuction={setServer}/>
    </div>
  )
}

export default ServerNav