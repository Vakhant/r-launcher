import React from 'react'
import css from './css/Balance.module.css'

const Balance = ({balance}) => {
  return (
    <>
        <span className="balance_txt">{balance}</span>
        <div className={css.balance_icon}>RC</div>
    </>
  )
}

export default Balance