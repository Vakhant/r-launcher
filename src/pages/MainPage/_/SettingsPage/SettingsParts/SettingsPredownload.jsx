import { Field, Form, Formik } from 'formik'
import React from 'react'
import sttngsPrtsCss from './SettingsParts.module.css'

const SettingsPredownload = () => {
  return (
  <div className={sttngsPrtsCss.settings_parts_content}>
      <Formik
        initialValues={{ name: "settingsPredownload", email: "" }}
        onSubmit={(values) => {console.log(values);}}
      >
      <Form>
        <div className={sttngsPrtsCss.settings_block}>
          <div className={sttngsPrtsCss.settings_checkbox_wrap}>
            <Field className={sttngsPrtsCss.settings_checkbox} id={'getNotif'} name="getNotif" type="checkbox" value={'getNotif'}/><label className={sttngsPrtsCss.settings_checkbox_label} htmlFor='getNotif'>Предзагрузка файлов игры (<span className={sttngsPrtsCss.settings_checkbox_grey_txt_but_not_so_grey}>Необходимое место на диске:</span> 7.2 гб.)</label>
            <div className={sttngsPrtsCss.settings_checkbox_comment}>Вы можете заранее скачивать необходимые игровые файлы, чтобы<br />
            при обновлении они заменялись с текущими. Это позволит меньше ждать,<br />
            и как можно быстрее получить доступ к игре.</div>
          </div>
        </div>
        <div className={sttngsPrtsCss.settings_block}>
        <Field className={sttngsPrtsCss.settings_checkbox} id={'preDownload'} name="preDownload" type="checkbox" value={'preDownload'}/><label className={sttngsPrtsCss.settings_checkbox_label} htmlFor='preDownload'>Выполнять предзагрузку файлов во время запущенной игры</label>
        </div>
      </Form>
    </Formik>
  </div>
  )
}

export default SettingsPredownload