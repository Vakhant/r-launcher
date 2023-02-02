import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './css/NavBlock.module.css'

const NavBlock = ({link=true, navBlockName, urlParams, id, to, onClickFunc, activeCondition, outLink}) => {
    return(
        <>{outLink?
          <a href={to} className={css.nav_block} to={to}>{navBlockName}
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={css.nav_block_outlink_ico} d="M5 0V2H2V0H5ZM0 10H2L5 7V3L0 8V10ZM5 0V2H6L5 3V7L8 4V8H10V0H5Z" fill="#555658"/>
              </svg>
          </a>:link?<NavLink className={({ isActive }) => (`${css.nav_block} ${isActive || urlParams===id ? css.nav_block_chosen : ''}`)} to={to}>{navBlockName}</NavLink>:
        <button className={`${css.nav_block} ${activeCondition === to ? css.nav_block_chosen : ''}`} onClick={()=>onClickFunc(to)}>{navBlockName}</button>}</>
    )
}
export default NavBlock