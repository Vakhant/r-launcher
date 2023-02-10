import React, { useEffect, useState } from 'react'
import css from './css/NotificationBlock.module.css'

const NotificationBlock = ({id, txt, name, checked}) => {
  const [hidden, setHidden] = useState(false)
  const [height, setHeight] = useState(false)
  let notificationBlock = React.createRef();
  useEffect(() => {
    setHeight(notificationBlock.current.getBoundingClientRect().height);
  }, [notificationBlock]);

  return (
    <div id={id} style={{'height': ` ${height?height+'px':'inherit'}`}} ref={notificationBlock} className={css.notifications_block + ` ${hidden?css.notifications_block_hidden:''}`}>
      <div className={css.notifications_block_header}>
        <div className={css.notifications_block_ico_wrap}><img src={checked?process.env.PUBLIC_URL+'/imgs/icons/header/notif_double-check-mark.svg':process.env.PUBLIC_URL+'/imgs/icons/header/notif_one-check-mark.svg'} alt="" className="notifications_block_ico" /></div>
        {name}
        <div className={css.notifications_remove} onClick={()=>setHidden(true)}><img src={process.env.PUBLIC_URL+'/imgs/icons/header/notif_close.svg'} alt="" className="notifications_block_ico" /></div>
      </div>
      {txt}
    </div>
  )
}

export default NotificationBlock