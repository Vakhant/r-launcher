import React, { useState } from 'react'
import css from './SettingsSlider.module.css'

const SettingsSlider = ({name, settings}) => {
  const [choosen, setfirst] = useState(settings.find(s => s.choosen).id)

  
  return (
    <div className={css.sttngs_slider_wrap}>
        <div className={css.sttngs_slider_name}>{name}</div>
        <div className={css.sttngs_slider}>
          <button onClick={()=>{setfirst(choosen===1?settings.length:choosen-1)}} className={css.sttngs_slider_nav+' '+css.sttngs_slider_prev}>
            <img src={'/imgs/icons/settings_left-right.svg'} alt="" />
          </button>
          <div className={css.sttngs_slider_list}>
            {settings.map(s => <div key={s.id} className={css.sttngs_slide+` ${choosen===s.id?css.sttngs_slide_choosen:''}`}>{s.name}</div>)}
          </div>
          <button onClick={()=>{setfirst(choosen===settings.length?1:choosen+1)}} className={css.sttngs_slider_nav+' '+css.sttngs_slider_next}>
            <img src={'/imgs/icons/settings_left-right.svg'} alt="" />
          </button>
        </div>
        <div className={css.sttngs_slider_recomendation}>
          {settings.map(s => s.recomended === true && choosen === s.id ? 'Рекомендуется' : '')}
        </div>
    </div>
  )
}

export default SettingsSlider