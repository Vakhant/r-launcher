import React from 'react'
import Logo from '../../../../components/_common/Logo'
import Button from '../../../../components/_common/Button'
import css from './InstallPages.module.css'
import HeaderBlock from '../../../../components/Header/_/HeaderBlock'
import LaunherWindowNav from '../../../../components/Header/_/LaunherWindowNav'
import ProgressBar from '../MainMainPage/_/_/ProgressBar'

const InstallApp = () => {
  return (
    <div className={css.install+' '+css.install_app_bg}>
        <div className={css.install_header}>
            <Logo page={'install'} />
		    <HeaderBlock content={<LaunherWindowNav/>}/>
        </div>
        <div className={css.install_content}>
            <div className={css.install_welcome_app_name}>Rapid Motion Launcher</div>
            <h1 className={css.install_h}>Установка лаунчера</h1>
            <img src={process.env.PUBLIC_URL+"/imgs/game_img_bg.jpg"} alt="" />
        </div>
        <div className={css.install_app_footer}>
            <div className={css.install_app_progressbar_wrap}>
              <div className={css.install_app_progressbar_comment}>Установка лаунчера <span className={css.install_app_progressbar_comment_light}>50%</span></div>
              <ProgressBar dnldStt={50} custClasses={css.install_app_progressbar}/>
            </div>
            <Button buttonStyle={'greyBtn'} customClasses={css.install_app_progressbar_btn} link={'#'} content='Отменить'/>
        </div>
    </div>
  )
}

export default InstallApp