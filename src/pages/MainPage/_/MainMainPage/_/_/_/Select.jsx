import React, { useState } from 'react'
import css from '../../css/Select.module.css'

const Select = ({chosenOption, optionList, optionFuction}) => {
const [selectActive, setSelectActive] = useState(false)

const optionOnClickFuction = (optFunParam) => {
  if(optFunParam !== chosenOption){
    optionFuction(optFunParam)
  }
}
  return (
    <button onBlur={()=>setSelectActive(false)} className={css.select + ` ${selectActive?css.select_active:''}`}>
      <div onClick={()=>setSelectActive(!selectActive)} className={css.select_arrow}></div>
      <input onClick={()=>setSelectActive(!selectActive)} readOnly type="text" className={css.select_input} value={optionList.find(el=>el.key === chosenOption).name}/>
      <div className={css.option_list}>
        {optionList.map(o => <div key={o.key} onClick={()=>optionOnClickFuction(o.key)} className={css.option + ` ${o.key==chosenOption?css.option_chosen:''}`}>{o.name}</div>)}
      </div>
    </button>
  )
}

export default Select