import React, { useState } from 'react'
import Button from '../../../../../components/_common/Button'
import css from './css/ServerFooter.module.css'
import ProgressBar from './_/ProgressBarBlock'
import downloadAR from '../../../../../_data/Download.json'

const ServerFooter = ({servFootStt='update-alert'}) => {

  let dnldStt = downloadAR.downloadAR.find(el=>el.key === servFootStt)
  // update
  // download
  // check
  // all-good
  // disconnect
  // update-alert
  // install-alert
  return (
    <footer className={css.footer}>
      {dnldStt.key === 'download' || dnldStt.key === 'check' || dnldStt.key === 'update' ? <ProgressBar dnldStt={dnldStt}/> : ''}
      {dnldStt.key === 'download' || dnldStt.key === 'update' ? <>
        <Button customClasses={css.download_btn} buttonStyle={'btnAct'} style={{'width':'118px'}} 
        content={<>Далее <img className={css.btns_imgs} src={process.env.PUBLIC_URL+'/imgs/icons/main_page/download_buttom-play.svg'} alt=""/></>}
        actCntnt={<>Пауза <img className={css.btns_imgs} src={process.env.PUBLIC_URL+'/imgs/icons/main_page/download_pause.svg'} alt=""/></>}
        />
        <Button customClasses={css.download_btn} buttonStyle={'greyBtn'} style={{'width':'108px'}} content={<>Стоп <img className={css.btns_imgs} src={process.env.PUBLIC_URL+'/imgs/icons/main_page/download_stop.svg'} alt=""/></>}/>
      </>: ''}
      {dnldStt.key === 'check' ? <Button customClasses={css.download_btn} buttonStyle={'greyBtn'} style={{'width':'242px', 'marginLeft':'22px'}} content={<>Остановить проверку <img className={css.btns_imgs} src={process.env.PUBLIC_URL+'/imgs/icons/main_page/download_stop.svg'} alt=""/></>}/> : ''}

      {dnldStt.key === 'all-good' ? <div className={css.dnld_stt + ' ' + css.all_good}>{dnldStt.txt} <img className={css.dnld_stt_icn} src={process.env.PUBLIC_URL+dnldStt.txtIcn} alt="" /></div> : ''}
      {dnldStt.key === 'disconnect' ? <div className={css.dnld_stt + ' ' + css.disconnect}>{dnldStt.txt} <img className={css.dnld_stt_icn} src={process.env.PUBLIC_URL+dnldStt.txtIcn} alt="" /></div> : ''}
      {dnldStt.key === 'update-alert' ? <div className={css.dnld_stt + ' ' + css.install_alert}>{dnldStt.txt} 
        <Button customClasses={css.install_btn} buttonStyle={'gradBtn'} style={{'width':'150px'}}content={<>Установить <img style={{'marginLeft':'13px'}} className={css.btns_imgs} src={process.env.PUBLIC_URL+'/imgs/icons/main_page/download_i_upload.svg'} alt=""/></>}/>
      </div> : ''}
      {dnldStt.key === 'install-alert' ? <div className={css.dnld_stt + ' ' + css.install_alert}>{dnldStt.txt}
        <Button customClasses={css.install_btn} buttonStyle={'gradBtn'} style={{'width':'188px'}} content={<>Установить игру <img style={{'marginLeft':'13px'}} className={css.btns_imgs} src={process.env.PUBLIC_URL+'/imgs/icons/main_page/download_i_upload.svg'} alt=""/></>}/>
      </div> : ''}

    </footer>
  )
}

export default ServerFooter