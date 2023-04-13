import React, { useState } from 'react'
import css from '../../css/Select.module.css'

const Select = ({chosenOption, optionList, optionFuction, serversListLength=1}) => {
  const [selectActive, setSelectActive] = useState(false)
  const [scroll, setScroll] = useState(0)
  

const optionOnClickFuction = (optFunParam) => {
  if(optFunParam !== chosenOption){
    optionFuction(optFunParam)
  }
}

const scrollbar = React.createRef();
const scrollList = React.createRef();

const scrolledOptionList = () => setScroll(scrollList.current.scrollTop*100/(scrollList.current.offsetHeight-scrollbar.current.offsetHeight*.75))
console.log(scroll);
  return (
    <button onBlur={()=>setSelectActive(false)} className={css.select + ` ${selectActive?css.select_active:''}`}>
      {serversListLength > 4 ? <><div className={css.scroll_hidden_blocks_top}></div><div className={css.scroll_hidden_blocks_bottom}></div></>:""}
      <div onClick={()=>setSelectActive(!selectActive)} className={css.select_arrow+` ${selectActive?css.select_arrow_act:''}`}></div>
      <div onClick={()=>setSelectActive(!selectActive)} className={css.select_arrow_revese+` ${selectActive?'':css.select_arrow_act}`}></div>
      <input onBlur={()=>setSelectActive(false)} onClick={()=>setSelectActive(!selectActive)} readOnly type="text" className={css.select_input} value={optionList.find(el=>el.key === chosenOption).name}/>
      <div ref={scrollList} onScroll={()=>{scrolledOptionList()}} className={css.option_list + ` ${serversListLength <= 4 ? css.option_list_stretch:''}`}>
        {optionList.map(o => <div key={o.key} onClick={()=>{optionOnClickFuction(o.key); setSelectActive(false)}} className={css.option + ` ${o.key==chosenOption?css.option_chosen:''}`}>{o.optionName}</div>)}
      </div>
      {serversListLength > 4 ? <div className={css.scroll_bar}><div ref={scrollbar} style={{"top":`${scroll}%`}} className={css.scroll_bar_block}></div></div> : <></>}
    </button>
  )
}

export default Select