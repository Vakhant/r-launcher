import React from 'react'
import AppVersion from './AppVersion'
import css from './css/Logo.module.css'

const Logo = ({page='main'}) => {
  return (
      <div className={css.logo+` ${page==="auth"?css.logo_auth:''} ${page==='install' && css.install_logo}`}>
          <img width={page==="main"?'66':page==="auth"?'78':'66'} height={page==="main"?'48':page==="auth"?'56':'48'} src={'/imgs/icons/aside/logo.svg'} alt=""/>
          <AppVersion page={page} version={page==="main"?'/imgs/icons/aside/v.1.0.svg':page==="auth"?'/imgs/icons/aside/v.1.0_light.svg':''} header={'Rapid Motion / Launcher Version 1.0 (03.05.22)'} comment={'Текущая версия лаунчера является полностью актуальной.'}/>
      </div>
  )
}

export default Logo