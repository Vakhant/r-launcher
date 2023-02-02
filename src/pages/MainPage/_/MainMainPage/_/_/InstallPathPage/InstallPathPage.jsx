import React from 'react'
import Button from '../../../../../../../components/_common/Button'
import css from '../../css/InstallPathPage.module.css'
import InstallPathSlider from './InstallPathSlider'

const InstallPathPage = ({ipthPage, setIpthPage, diskSpaceNeeded='7.2 гб'}) => {
  return (
    <div className={css.ipth_popup + ` ${ipthPage ? css.ipth_page_act : ''}`}>
        <div className={css.ipth_header}>
            <h2 className={css.ipth_h}>Выбор пути для установки игры</h2>
            <button className={css.ipth_esc} onClick={()=>setIpthPage(!ipthPage)}><img src={'/imgs/icons/header/h_close.svg'} alt="" /></button>
        </div>
        <section className={css.ipth_main_content}>
            <div className={css.ipth_main_comment}>Выберите диск, на который будет установлена игра. Или укажите путь вручную. <span className={css.ipth_main_comment_att}>Будьте внимательны!</span>
            Необходимое место на диске: <span className={css.ipth_main_comment_disk_space}>{diskSpaceNeeded}</span>.</div>
            <InstallPathSlider/>
            <form className={css.ipth_form} action="#">
                <input className={css.ipth_input} type="text" />
                <Button style={{'width':'92px','height':'44px','marginLeft':'18px'}} buttonStyle={'greyBtn'} content={<>Обзор</>}/>
            </form>
            <Button customClasses={css.ipth_btn} buttonStyle={'gradBtn'} link={'#'} content={<>Установить игру</>}/>
        </section>
    </div>
  )
}

export default InstallPathPage