import React from 'react'
import css from '../css/ServerInfoBlock.module.css'

const ServerInfoBlock = ({img, data, name}) => {
  return (
    <div className={css.server_info_block}>
      <div className={css.server_info_block_img_wrap}>
        <img width={26} height={26} className={css.server_info_block_img} src={img} alt="" />
      </div>
      <div className={css.server_info_block_txt}>
        <div className={css.server_info_data}>{data}</div>
        <div className={css.server_info_name}>{name}</div>
      </div>
    </div>
  )
}

export default ServerInfoBlock