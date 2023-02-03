import React from 'react'
import ProgressBar from '../MainMainPage/_/_/ProgressBar'
import css from './Update.module.css'

const Update = () => {
  return (
    <div class={css.update}>
        <div className={css.update_header}>
            <h1 className={css.update_h}>Rapid Motion Launcher</h1>
            <div className={css.update_esc}></div>
            <button className={css.h_close} href="#">
              <img width="16" height="16" src={process.env.PUBLIC_URL+"/imgs/icons/header/h_close.svg"} alt=""/>
            </button>
        </div>
      <div class={css.update_content}>
        <div class={css.update_progress_bar_info}>
          <img class={css.update_progress_bar_img} src={process.env.PUBLIC_URL+"/imgs/icons/update.svg"} alt="" />
          <div class={css.update_progress_bar_info_txt}>
            <div className={css.upadte_step}>Выполняется обновление лаунчера...</div>
            <div className={css.upadte_progress}>Прогресс обновления <span className={css.upadte_progress_number}>50%</span></div>
          </div>
        </div>
        <div className={css.update_progress_bar}>
        <ProgressBar dnldStt={50} custClasses={css.update_progressbar}/>
        </div>
      </div>
    </div>
  )
}

export default Update