import React from 'react'
import Button from '../../../../../components/_common/Button'
import sttngsPrtsCss from './SettingsParts.module.css'

const SettingsSecurity = () => {
  return (
  <div className={sttngsPrtsCss.settings_parts_content+' '+sttngsPrtsCss.settings_security_block}>
    <div className={sttngsPrtsCss.settings_block}>
      <div className={sttngsPrtsCss.settings_block_h}>Безопасность аккаунта <img src={process.env.PUBLIC_URL+'/imgs/icons/settings_alert.svg'} alt="" /></div>
          <div className={sttngsPrtsCss.settings_row}>
            <span className={sttngsPrtsCss.main_info_wrap}><span className={sttngsPrtsCss.main_info}>Двухфакторная аутентификация</span></span>
            <Button style={{'width':'120px','height':'38px','margin':'0 30px 0 0'}} buttonStyle={'greyBtn'} content='Включить'/>
          </div>
    </div>
    <div className={sttngsPrtsCss.settings_block}>
      <div className={sttngsPrtsCss.settings_block_h}>Электронная почта  <img src={process.env.PUBLIC_URL+'/imgs/icons/settings_email.svg'} alt="" /><img src={process.env.PUBLIC_URL+'/imgs/icons/settings_alert.svg'} alt="" /></div>
          <div className={sttngsPrtsCss.settings_row}>
            <span className={sttngsPrtsCss.main_info_wrap}><span className={sttngsPrtsCss.main_info}>airxstreets@ya.ru </span><span className={sttngsPrtsCss.main_info_comment}></span>(не подтвержд.)</span>
            <Button style={{'width':'120px','height':'38px','margin':'0 30px 0 0'}} buttonStyle={'greyBtn'} content='Изменить'/>
            <Button style={{'width':'142px','height':'38px'}} buttonStyle={'greyBtn'} content='Подтвердить'/>
          </div>
    </div>
    <div className={sttngsPrtsCss.settings_block}>
      <div className={sttngsPrtsCss.settings_block_h}>Пароль аккаунта <img src={process.env.PUBLIC_URL+'/imgs/icons/settings_password.svg'}/></div>
          <div className={sttngsPrtsCss.settings_row}>
            <span className={sttngsPrtsCss.main_info_wrap}><span className={sttngsPrtsCss.main_info}>∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙</span></span>
            <Button style={{'width':'120px','height':'38px','margin':'0 30px 0 0'}} buttonStyle={'greyBtn'} content='Изменить'/>
          </div>
    </div>
  </div>
  )
}

export default SettingsSecurity