import React, { useState } from 'react'
import css from './SettingsPage.module.css'
import settingsNavAR from '../../../../_data/SettingsNavList.json'
import NavBlock from '../../../../components/_common/NavBlock';
import SettingsMain from './SettingsParts/SettingsMain';
import SettingsSecurity from './SettingsParts/SettingsSecurity';
import SettingsGame from './SettingsParts/SettingsGame';
import SettingsPredownload from './SettingsParts/SettingsPredownload';

const SettingsPage = ({settings, setSettings}) => {

    let settingsNavList = settingsNavAR.settingsNavList
    let settingsNavListMap = settingsNavList.map(nb => <NavBlock navBlockName={nb.to=='settings=security'?<>{nb.name} <img src={process.env.PUBLIC_URL+'/imgs/icons/settings_alert.svg'}/></>:nb.name} onClickFunc={()=>setSettings(nb.to)} link={false} to={nb.to} activeCondition={settings} key={nb.id}/>)
  
    let content = <SettingsMain/>

    switch (settings) {
        case 'settings=main': content = <SettingsMain/>; break;
        case 'settings=security': content = <SettingsSecurity/>; break;
        case 'settings=game': content = <SettingsGame/>; break;
        case 'settings=predownload': content = <SettingsPredownload/>; break;
        default: break;
    }

    return (
        <div className={css.settings_popup+` ${settings?'':css.settings_popup_hidden}`}>
            <div className={css.settings_header}>
                <h2 className={css.settings_h}>
                    <img src={process.env.PUBLIC_URL+'/imgs/icons/big-settings.svg'} alt="" />
                    Настройки лаунчера и игры
                </h2>
                <button onClick={()=>{setSettings('')}} className={css.settings_esc}><img src={process.env.PUBLIC_URL+'/imgs/icons/header/h_close.svg'} alt="" /></button>
            </div>
            <div className={css.settings_content}>
                <div className={css.settings_aside}>
                    {settingsNavListMap}
                </div>
                {content}
            </div>
        </div>
    )
}

export default SettingsPage