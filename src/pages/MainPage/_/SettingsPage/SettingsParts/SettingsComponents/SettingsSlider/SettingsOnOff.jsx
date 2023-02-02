import React, { useState } from 'react'
import css from './SettingsOnOff.module.css'

const SettingsOnOff = ({name, on}) => {
    const [settingOn, setSettingOn] = useState(on)
  return (
    <button onClick={()=>{setSettingOn(!settingOn)}} className={css.onOff_block}>
        <div className={css.onOff_name}>{name}</div>
        <div className={css.onOff_checkbox+` ${settingOn?css.onOff_checkbox_on:''}`}>
            <div className={css.onOff_checkbox_lever}>
            </div>
        </div>
    </button>
  )
}

export default SettingsOnOff