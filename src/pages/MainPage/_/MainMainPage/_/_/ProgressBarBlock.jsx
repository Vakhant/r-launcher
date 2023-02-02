import React from 'react'
import css from '../css/ProgressBarBlock.module.css'
import ProgressBar from './ProgressBar'

const ProgressBarBlock = ({dnldStt}) => {

  return (
    <div className={css.download_block}>
        {dnldStt.key==='download'||dnldStt.key==='update'?<div className={css.download_txt}>
            {dnldStt.progressBarTxt}<span className={css.download_percent}>{dnldStt.progress}% </span>
            (<span className={css.download_data}>{dnldStt.alrdyDwnLdd} </span>/<span className={css.download_data}> {dnldStt.GBs}</span>)<span className={css.download_data_X}>&#10006;</span>
            (<span className={css.download_data}>{dnldStt.timeLeft} </span>/<span className={css.download_data}> {dnldStt.dwnldSpeen}</span>)
        </div>
        :dnldStt.key==='check'?<div className={css.download_txt}>
          {dnldStt.progressBarTxt}<span className={css.download_percent}>{dnldStt.progress}% </span>
          (<span className={css.download_data}>{dnldStt.alrdyChecked} </span>/<span className={css.download_data}> {dnldStt.GBs}</span>)
        </div>:''}
        <ProgressBar custClasses={css.download_progressbar_main_page} dnldStt={dnldStt.progress}/>
    </div>
  )
}

export default ProgressBarBlock