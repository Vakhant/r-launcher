import React from 'react'
import Logo from '../_common/Logo'
import SocForum from './_/SocForum'
import SocNav from './_/SocNav'
import MainNavList from './_/MainNavList'
import css from './Aside.module.css'

export default function Aside() {
  return (
    <aside className={css.aside}>
      <Logo aboutLauncherVersion=''/>
      <MainNavList/>
      <SocForum/>
      <SocNav/>
    </aside>
  )
}
