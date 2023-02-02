import React, { useState } from 'react'
import css from '../../css/InstallPathSlide.module.css'

const InstallPathSlide = ({strt, name, space, chosen, id}) => {
    return (
        <div className={css.ipth_slider_block + ` ${chosen?css.ipth_slider_block_chosen:''} ${strt?css.ipth_slider_block_strt:''}`}>
            <div className={css.ipth_slider_disk_name}>Диск «<span className={css.ipth_slider_txt_white}>{name}</span>»</div>
            <svg className={css.ipth_slider_disk_ico} width="43" height="48" viewBox="0 0 42 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28 34L27 35V38H32L33 37V34H28ZM28 34L27 35V38H32L33 37V34H28ZM28 34L27 35V38H32L33 37V34H28ZM40 0H24V11H29V13L21 21V30H37L38 31V41L37 42H21V46H40L42 44V2L40 0ZM33 34H28L27 35V38H32L33 37V34ZM28 34L27 35V38H32L33 37V34H28ZM28 34L27 35V38H32L33 37V34H28ZM5 30H21V21L13 13V11H18V0H2L0 2V44L2 46H21V42H5L4 41V31L5 30Z" fill={chosen?"#4775C1":'#ffffffb7'}/>
            </svg>
            <div className={css.ipth_slider_disk_space}>Место <span className={css.ipth_slider_txt_white}>{space}</span></div>
            <div className={css.ipth_slider_disk_choose}> 
            {chosen?'Выбран':'Выбрать'} <div className={css.ipth_slider_disk_choose_box}>
                    {chosen?<img src={'/imgs/icons/main_page/disk_mini-check-mark.svg'} alt="" />:''}
                </div>
            </div>
        </div>
    )
}

export default InstallPathSlide