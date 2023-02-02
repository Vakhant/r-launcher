import React, { useState } from 'react'
import css from './css/AppVersion.module.css'

const AppVersion = ({version, header, comment, page}) => {
  const [active, setActive] = useState(false)

  return (
    <button onBlur={()=>setActive(false)} className={css.app_version_wrap + ` ${active? css.app_version_wrap_active:''}`}>
      <img onClick={()=>setActive(!active)} width="50" height="13" className={css.app_version+` ${page!=='main'&&css.version_other_page}`} src={version} alt=""/>
      <div className={css.app_version_info}><div className={css.app_version_info_header}>{header}</div>{comment}</div>
    </button>
  )
}

export default AppVersion