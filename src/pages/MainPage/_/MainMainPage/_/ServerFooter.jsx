import React, { useState } from 'react'
import Button from '../../../../../components/_common/Button'
import css from './css/ServerFooter.module.css'
import ProgressBar from './_/ProgressBarBlock'
import downloadAR from '../../../../../_data/Download.json'

const ServerFooter = () => {

  let dnldStt = downloadAR.downloadAR.find(el=>el.key === 'update')

  return (
    <footer className={css.footer}>
      {dnldStt.key === 'download' || dnldStt.key === 'check' || dnldStt.key === 'update' ? <ProgressBar dnldStt={dnldStt}/> : ''}
      {dnldStt.key === 'download' || dnldStt.key === 'update' ? <>
        <Button customClasses={css.download_btn} buttonStyle={'greyBtn'} style={{'width':'118px'}} 
        content={<>Далее <img className={css.btns_imgs} src={'/imgs/icons/main_page/download_buttom-play.svg'} alt=""/><span></span></>}
        actCntnt={<>Пауза <img className={css.btns_imgs} src={'/imgs/icons/main_page/download_pause.svg'} alt=""/><span></span></>}
        />
        <Button customClasses={css.download_btn} buttonStyle={'greyBtn'} style={{'width':'108px'}} content={<>Стоп <img className={css.btns_imgs} src={'/imgs/icons/main_page/download_stop.svg'} alt=""/><span></span></>}/>
      </>: ''}
      {dnldStt.key === 'check' ? <Button customClasses={css.download_btn} buttonStyle={'greyBtn'} style={{'width':'242px'}} content={<>Остановить проверку <img style={{'margin-left':'30px'}} className={css.btns_imgs} src={'/imgs/icons/main_page/download_stop.svg'} alt=""/><span></span></>}/> : ''}

      {dnldStt.key === 'all-good' ? <div className={css.dnld_stt + ' ' + css.all_good}>{dnldStt.txt} <img className={css.dnld_stt_icn} src={dnldStt.txtIcn} alt="" /></div> : ''}
      {dnldStt.key === 'disconnect' ? <div className={css.dnld_stt + ' ' + css.disconnect}>{dnldStt.txt} <img className={css.dnld_stt_icn} src={dnldStt.txtIcn} alt="" /></div> : ''}
      {dnldStt.key === 'update-alert' ? <div className={css.dnld_stt + ' ' + css.install_alert}>{dnldStt.txt} 
        <Button customClasses={css.install_btn} buttonStyle={'greyBtn'} style={{'width':'150px'}}content={<>Установить <img style={{'margin-left':'13px'}} className={css.btns_imgs} src={'/imgs/icons/main_page/download_i_upload.svg'} alt=""/><span></span></>}/>
      </div> : ''}
      {dnldStt.key === 'install-alert' ? <div className={css.dnld_stt + ' ' + css.install_alert}>{dnldStt.txt}
        <Button customClasses={css.install_btn} buttonStyle={'greyBtn'} style={{'width':'188px'}} content={<>Установить игру <img style={{'margin-left':'13px'}} className={css.btns_imgs} src={'/imgs/icons/main_page/download_i_upload.svg'} alt=""/><span></span></>}/>
      </div> : ''}

    </footer>
  )
}

export default ServerFooter