import React from 'react'
import Logo from '../../../../components/_common/Logo'
import Button from '../../../../components/_common/Button'
import css from './InstallPages.module.css'
import HeaderBlock from '../../../../components/Header/_/HeaderBlock'
import LaunherWindowNav from '../../../../components/Header/_/LaunherWindowNav'
import { Field, Form, Formik } from 'formik'

const InstallPath = () => {
  return (
    <div className={css.install+' '+css.install_path_bg}>
        <div className={css.install_header}>
            <Logo page={'install'} />
		    <HeaderBlock content={<LaunherWindowNav/>}/>
        </div>
        <div className={css.install_content}>
            <div className={css.install_welcome_app_name}>Rapid Motion Launcher</div>
            <h1 className={css.install_h}>Выбор места установки</h1>
                <div className={css.install_txt}>Пожалуйста, выберите место, куда вы хотите установить «<span className={css.install_txt_light}>Rapid Motion Launcher»</span>.</div>
                
        <Formik
        initialValues={{  }}
        onSubmit={(values)=>console.log(values)}
        >
        {({ }) => (
          <Form className={css.auth_form}>
                  <div className={css.ipth_input_wrap}>
                    <input className={css.ipth_input} type="text" />
                    <Button style={{'width':'92px','height':'44px','marginLeft':'18px'}} buttonStyle={'greyBtn'} content={<>Обзор</>}/>
                  </div>
                  <input className={css.ipth_input_clear} type="button" value="Восстановить по умолчанию"/>
                  <div className={css.form_row}>
                    <Field className={css.input_checkbox} type="checkbox" id={'newsSubscribe'} name='newsSubscribe'/>
                    <label htmlFor="newsSubscribe">Добавить ярлык на рабочий стол «<span className={css.install_txt_light}>Rapid Motion Launcher</span>»</label>
                  </div>
          </Form>)}
        </Formik>
        </div>
        <div className={css.install_footer}>
            <a className={css.install_footer_link} href="#">rapid-motion.ru</a>
            <a className={css.install_footer_link} href="#">vk.com/rapidm</a>
            <Button buttonStyle={'greyBtn'} customClasses={css.btn_cancel} link={'#'} content='Назад'/>
            <Button buttonStyle={'gradBtn'} customClasses={css.btn_next} onClickFun={()=>{console.log('test');}} link={false} content={'Продолжить'}/>
            
        </div>
    </div>
  )
}

export default InstallPath