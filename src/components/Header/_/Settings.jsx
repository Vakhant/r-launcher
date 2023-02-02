import React from 'react'
import css from './css/NotSetTurnClose.module.css'

const Settings = ({settings, setSettings}) => {
  return (
    <button className={css.h_settings} onClick={()=>{settings?console.log(null):setSettings('settings=main')}}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={css.setting_icon} d="M17 7V3H13L10 0L7 3H3V7L0 10L3 13V17H7L10 20L13 17H17V13L20 10L17 7ZM10 13C8.3 13 7 11.7 7 10C7 9.2 7.3 8.4 7.9 7.9C8.5 7.4 9.2 7 10 7C10.8 7 11.5 7.4 12.1 7.9C12.7 8.4 13 9.2 13 10C13 11.7 11.7 13 10 13Z" fill="#fff"/>
      </svg>
    </button>
  )
}

export default Settings