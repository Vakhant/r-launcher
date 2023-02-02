import React from 'react'
import sttngsPrtsCss from './SettingsParts.module.css'
import css from './SettingsGame.module.css'
import settingsGame from '../../../../../_data/SettingsGame.json'
import SettingsSlider from './SettingsComponents/SettingsSlider/SettingsSlider'
import SettingsOnOff from './SettingsComponents/SettingsSlider/SettingsOnOff'

const SettingsGame = () => {
  
  let settingsSliders = settingsGame.settingSliders
  let settingOnOffs = settingsGame.settingOnOffs
  let settingsSlidersMap = settingsSliders.map(s => <SettingsSlider name={s.name} settings={s.settingsList} id={s.id} key={s.id}/>)
  let settingOnOffsMap = settingOnOffs.map(s => <SettingsOnOff name={s.name} on={s.on} id={s.id} key={s.id}/>)

  return (
    <div className={sttngsPrtsCss.settings_parts_content+' '+css.settings_game_content}>
      <div className={sttngsPrtsCss.settings_block}>
        {settingsSlidersMap}
      </div>
      <div className={sttngsPrtsCss.settings_block}>
        <div className={sttngsPrtsCss.settings_block_h}>Выборочная настройка внутриигровой графики</div>
          {settingOnOffsMap}
      </div>
      <div className={sttngsPrtsCss.settings_block}>
        {settingsSlidersMap}
      </div>
    </div>
  )
}

export default SettingsGame