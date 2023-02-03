import React, { useState } from 'react'
import css from './css/MainPopup.module.css'

const PopupMain = ({type, header, content, active, activate}) => {
  let headerClass
  let imgSrc
  switch (type) {
      case 'alert':
        headerClass=css.alert;
        imgSrc = process.env.PUBLIC_URL+'/imgs/icons/popup_main_info-red.svg'
        break;
      case 'attention':
        headerClass=css.attention;
        imgSrc = process.env.PUBLIC_URL+'/imgs/icons/popup_main_info-yellow.svg'
        break;
      case 'info':
        headerClass=css.info;
        imgSrc = process.env.PUBLIC_URL+'/imgs/icons/popup_main_info-green.svg'
        break;
      default:
        break;
    }
  return (
    <div className={css.popup_wrap + ` ${active? '' : css.popup_wrap_hide}`}>
      <div onClick={()=>activate(false)} className={css.popup_bg}>
      </div>
      <div className={css.popup}>
        <div className={css.popup_block + ' ' + headerClass}>
          <div className={css.popup_header}>
            <img className={css.popup_header_ico} width={22} height={22} src={imgSrc} alt="" />
            <span className={css.popup_header_txt}>{header}</span>
            <img onClick={()=>activate(false)} className={css.popup_header_esc} width={14} height={14} src={process.env.PUBLIC_URL+'/imgs/icons/popup_main_close.svg'} alt="" />
          </div>
          <div className={css.popup_content}>{content}</div>
        </div>
      </div>
    </div>
  )
}

export default PopupMain