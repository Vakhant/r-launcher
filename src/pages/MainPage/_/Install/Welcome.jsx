import React from 'react'
import Logo from '../../../../components/_common/Logo'
import Button from '../../../../components/_common/Button'
import css from './InstallPages.module.css'
import HeaderBlock from '../../../../components/Header/_/HeaderBlock'
import LaunherWindowNav from '../../../../components/Header/_/LaunherWindowNav'

const Welcome = () => {
  return (
    <div className={css.install+' '+css.welcome_bg}>
        <div className={css.install_header}>
            <Logo page={'install'} />
		    <HeaderBlock content={<LaunherWindowNav/>}/>
        </div>
        <div className={css.install_content}>
            <div className={css.install_welcome_app_name}>Rapid Motion Launcher</div>
            <h1 className={css.install_h}>Добро пожаловать</h1>
                <div className={css.install_txt}>Вас приветсвует мастер установки «<span className={css.install_txt_light}>Rapid Motion Launcher»</span>.</div>
                <div className={css.install_txt}>Программа установит «<span className={css.install_txt_light}>Rapid Motion Launcher</span>» (версия 1.4) на ваше устройство.</div>
                <div className={css.install_txt}>Рекомендуется закрыть все программы перед тем, как продолжить.</div>
                <div className={css.install_txt}>Нажмите «<span className={css.install_txt_light}>Продолжить</span>», чтобы подвердить действие, или «<span className={css.install_txt_light}>Отмена</span>», чтобы выйти
                из программы установки.</div>
        </div>
        <div className={css.install_footer}>
            <a className={css.install_footer_link} href="#">rapid-motion.ru</a>
            <a className={css.install_footer_link} href="#">vk.com/rapidm</a>
            <Button buttonStyle={'greyBtn'} customClasses={css.btn_cancel} link={'#'} content='Отменить'/>
            <Button buttonStyle={'gradBtn'} customClasses={css.btn_next} onClickFun={()=>{console.log('test');}} link={false} content={'Продолжить'}/>
            
        </div>
    </div>
  )
}

export default Welcome