import React, { useState } from 'react'
import cssElse from './css/NotSetTurnClose.module.css'
import css from './css/Notification.module.css'
import NotificationBlock from './NotificationBlock'
import notifsAR from '../../../_data/Notifications.json'

const Notification = () => {
  const [active, setActive] = useState(false)
  const [empty, setEmpty] = useState(false)

  let nAR = notifsAR.notificationsList
  return (
    <button onBlur={()=>setActive(false)} className={css.notifications_wrap + ` ${active?css.notifications_popup_active:''} ${empty?css.notifications_popup_empty:''}`} href="#">
      <img onClick={()=>setActive(!active)} className={cssElse.h_notifications + ' ' + css.notifications} width="16" height="18" src={empty?"/imgs/icons/header/h_notifications.svg":"/imgs/icons/header/h_notifications_new.svg"} alt=""/>
      <div className={css.notifications_popup}>
        <div className={css.notifications_list}>
          {nAR.map(n => <NotificationBlock txt={n.txt} name={n.name} checked={n.checked} key={n.id} id={n.id} />   )}
        </div>
        <div onClick={()=>setEmpty(true)} className={css.notifications_clear_all}>Очистить все уведомления</div>
        <div onClick={()=>setEmpty(false)} className={css.notifications_popup_empty_txt}>В настоящее время уведомлений нет. Они будут появляться по мере вашей игры на проекте.</div>
      </div>
    </button>
  )
}

export default Notification