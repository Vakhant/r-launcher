import React, { useState } from 'react'
import css from './SettingsOnOff.module.css'

const SettingsOnOff = ({id, name, on}) => {
    const [settingOn, setSettingOn] = useState(on)
  return (
    <button onClick={()=>{setSettingOn(!settingOn)}} className={css.onOff_block}>
        <div className={css.onOff_name}>{name}<span className={css.onOff_name_hard}>{`${id===5?'*':id===6?'*':''}`}</span></div>
        <div className={css.onOff_checkbox+` ${settingOn?css.onOff_checkbox_on:''}`}>
            <div className={css.onOff_checkbox_lever}>
            </div>
        </div>
    </button>
  )
}

export default SettingsOnOff