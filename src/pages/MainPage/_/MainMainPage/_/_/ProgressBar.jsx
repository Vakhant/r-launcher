import React from 'react'
import css from '../css/ProgressBar.module.css'

const ProgressBar = ({dnldStt, custClasses}) => {

  return (
    <div className={css.download_progressbar+` ${!!custClasses&&custClasses}`}>
      <div style={{'width': dnldStt+'%'}} className={css.download_progressbar_progress}>
      <div className={css.download_progressbar_shine}></div>
      <div className={css.download_progressbar_shine}></div>
      </div>
    </div>
  )
}

export default ProgressBar