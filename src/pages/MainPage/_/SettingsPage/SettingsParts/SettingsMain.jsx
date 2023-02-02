import { Field, Form, Formik } from 'formik'
import React from 'react'
import Button from '../../../../../components/_common/Button'
import sttngsPrtsCss from './SettingsParts.module.css'
import css from './SettingsMain.module.css'

const SettingsMain = () => {
  return (  
  <div className={sttngsPrtsCss.settings_parts_content}>
    <Formik
        initialValues={{ name: "mainSettings", email: "" }}
        onSubmit={(values) => {console.log(values);}}
      >
      <Form>
        <div className={sttngsPrtsCss.settings_block}>
          <div className={sttngsPrtsCss.settings_block_h}>Путь установки</div>
          <div className={sttngsPrtsCss.settings_row}>
            <Field className={css.settings_block_input} name="pathToGameLauncher" type="text" placeholder={'Укажите путь к игровому клиенту'}/>
            <Button style={{'width':'120px','height':'38px'}} buttonStyle={'greyBtn'} content='Изменить'/>
          </div>
        </div>

        <div className={sttngsPrtsCss.settings_block+' '+css.checkbox_list}>
          <Field className={sttngsPrtsCss.settings_checkbox} id={'getNotif'} name="getNotif" type="checkbox" value={'getNotif'}/><label className={sttngsPrtsCss.settings_checkbox_label} htmlFor='getNotif'>Получать уведомления (лаунчер)</label>
          <Field className={sttngsPrtsCss.settings_checkbox} id={'distributeFiles'} name="distributeFiles" type="checkbox" value={'distributeFiles'}/><label className={sttngsPrtsCss.settings_checkbox_label} htmlFor='distributeFiles'>Раздавать файлы другим игрокам</label>
          <Field className={sttngsPrtsCss.settings_checkbox} id={'speedLimit'} name="speedLimit" type="checkbox" value={'speedLimit'}/><label className={sttngsPrtsCss.settings_checkbox_label} htmlFor='speedLimit'>Ограничивать скорость во время скачивания игровых файлов,
            обновлений и так далее</label>
        </div>
      </Form>
    </Formik>
  </div>
  )
}

export default SettingsMain