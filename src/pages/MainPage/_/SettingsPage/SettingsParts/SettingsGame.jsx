import React from 'react'
import sttngsPrtsCss from './SettingsParts.module.css'
import settingsGame from '../../../../../_data/SettingsGame.json'
import SettingsSlider from './SettingsComponents/SettingsSlider/SettingsSlider'
import SettingsOnOff from './SettingsComponents/SettingsSlider/SettingsOnOff'
import css from './SettingsGame.module.css'

const SettingsGame = () => {
  
  let settingsSliders = settingsGame.settingSliders
  let settingsSliders2 = settingsGame.settingSliders2
  let settingOnOffs = settingsGame.settingOnOffs
  let settingsSlidersMap = settingsSliders.map(s => <SettingsSlider name={s.name} settings={s.settingsList} id={s.id} key={s.id}/>)
  let settingsSlidersMap2 = settingsSliders2.map(s => <SettingsSlider name={s.name} settings={s.settingsList} id={s.id} key={s.id}/>)
  let settingOnOffsMap = settingOnOffs.map(s => <SettingsOnOff name={s.name} on={s.on} id={s.id} key={s.id}/>)

  return (
    <div className={sttngsPrtsCss.settings_parts_content+' '+sttngsPrtsCss.settings_game_content+' '+css.settings_game_content}>
      <div className={sttngsPrtsCss.settings_block}>
        {settingsSlidersMap}
      </div>
      <div className={sttngsPrtsCss.settings_block}>
        <div className={sttngsPrtsCss.settings_block_h}>Выборочная настройка внутриигровой графики</div>
          {settingOnOffsMap}
          
          <div className={sttngsPrtsCss.settings_block_adds}>
            {settingsSlidersMap2}
          </div>
      </div>
    </div>
  )
}

export default SettingsGame