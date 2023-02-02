import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './css/HelpNavBlock.module.css'

const HelpNavBlock = ({navBlockName, to}) =>
    <NavLink className={({ isActive }) => (`${css.nav_block} ${isActive ? css.nav_block_chosen : ''}`)} to={to}>{navBlockName}</NavLink>
export default HelpNavBlock