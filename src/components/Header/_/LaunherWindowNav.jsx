import React from 'react'
import css from './css/NotSetTurnClose.module.css'

const LaunherWindowNav = () => {
  return (
    <>
		<button className={css.h_turn} href="#">
			<img width="18" height="3" src={process.env.PUBLIC_URL+"/imgs/icons/header/h_turn.svg"} alt=""/>
		</button>
		<button className={css.h_close} href="#">
			<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path className={css.сlose_icon} d="M16 0H14L8 6L2 0H0V2L6 8L0 14V16H2L8 10L14 16H16V14L10 8L16 2V0Z" fill="white"/>
			</svg>
		</button>
	</>
  )
}

export default LaunherWindowNav