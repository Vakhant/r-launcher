import React from 'react'
import Balance from './_/Balance'
import LaunherWindowNav from './_/LaunherWindowNav'
import Notification from './_/Notification'
import Settings from './_/Settings'
import Status from './_/Status'
import UserInfo from './_/UserInfo'
import css from './Header.module.css'
import HeaderBlock from './_/HeaderBlock'

const Header = ({setSettings, settings}) => {
  return (
    <header className={css.header}>
		<HeaderBlock content={<Status statustxt='Платина (14 д. 20 ч.)'/>}/>
		<HeaderBlock content={<Balance balance='1,000 RC'/>}/>
		<HeaderBlock content={<UserInfo avatarSrc={process.env.PUBLIC_URL+"/imgs/icons/header/avatar.png"} nickname='airxstreets' />}/>
		<HeaderBlock content={<>
			<Notification notifications_list=''/>
			<Settings settings={settings} setSettings={setSettings}/>
		</>}/>
		<HeaderBlock content={<LaunherWindowNav/>}/>
		
	</header>
    
  )
}

export default Header