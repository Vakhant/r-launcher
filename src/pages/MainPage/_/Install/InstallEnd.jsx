import React from 'react'
import Logo from '../../../../components/_common/Logo'
import Button from '../../../../components/_common/Button'
import css from './InstallPages.module.css'
import HeaderBlock from '../../../../components/Header/_/HeaderBlock'
import LaunherWindowNav from '../../../../components/Header/_/LaunherWindowNav'
import { Field, Form, Formik } from 'formik'

const InstallEnd = () => {
  return (
    <div className={css.install+' '+css.install_end}>
        <div className={css.install_header}>
            <Logo page={'install'} />
		    <HeaderBlock content={<LaunherWindowNav/>}/>
        </div>
        <div className={css.install_content}>
            <div className={css.install_welcome_app_name}>Rapid Motion Launcher</div>
            <h1 className={css.install_h}>Завершение</h1>
                <div className={css.install_txt}>Программа  «<span className={css.install_txt_light}>Rapid Motion Launcher»</span> была успешно установлена в этой системе.</div>
                <div className={css.install_txt}>Нажмите «<span className={css.install_txt_light}>Закрыть</span>», чтобы выйти из программы установки «<span className={css.install_txt_light}>Rapid Motion Launcher»</span>.</div>
          <Formik
          initialValues={{  }}
          onSubmit={(values)=>console.log(values)}
          >
          {({ }) => (
            <Form className={css.auth_form+' '+css.install_end_form}>
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
            <Button buttonStyle={'gradBtn'} customClasses={css.btn_next_end} onClickFun={()=>{console.log('test');}} link={false} content={'Закрыть'}/>
            
        </div>
    </div>
  )
}

export default InstallEnd