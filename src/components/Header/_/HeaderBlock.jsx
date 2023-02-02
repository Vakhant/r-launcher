import React from 'react'
import css from './css/HeaderBlock.module.css'

const HeaderBlock = ({content}) => {
  return (
    <div className={css.header_block}>
        {content}
    </div>
  )
}

export default HeaderBlock