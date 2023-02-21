import React, { useEffect, useState } from 'react'
import css from './css/NotificationBlock.module.css'

const NotificationBlock = ({id, txt, name, checked}) => {
  const [hidden, setHidden] = useState(false)
  const [height, setHeight] = useState(false)
  const [checkedly, setCheckedly] = useState(checked)
  let notificationBlock = React.createRef();
  useEffect(() => {
    setHeight(notificationBlock.current.getBoundingClientRect().height);
  }, [notificationBlock]);

  return (
    <div id={id} style={{'height': ` ${height?height+'px':'initial'}`}} ref={notificationBlock} className={css.notifications_block + ` ${hidden?css.notifications_block_hidden:''}`}>
      <div className={css.notifications_block_header}>
        <div onClick={()=>setCheckedly(true)} className={css.notifications_block_ico_wrap+` ${checkedly?'':css.notifications_block_ico_wrap_hovered}`}>
          <img src={process.env.PUBLIC_URL+'/imgs/icons/header/notif_double-check-mark.svg'} alt="" className={css.notifications_block_ico+` ${checkedly?css.notifications_block_ico_active:''}`} />
          <img src={process.env.PUBLIC_URL+'/imgs/icons/header/notif_one-check-mark.svg'} alt="" className={css.notifications_block_ico+` ${checkedly?'':css.notifications_block_ico_active}`} />
        </div>
        {name}
        <div className={css.notifications_remove} onClick={()=>setHidden(true)}><img src={process.env.PUBLIC_URL+'/imgs/icons/header/notif_close.svg'} alt="" className="notifications_block_ico" /></div>
      </div>
      {txt}
    </div>
  )
}

export default NotificationBlock