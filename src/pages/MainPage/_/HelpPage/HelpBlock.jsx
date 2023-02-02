import React, { useEffect, useState } from 'react'
import css from './css/HelpBlock.module.css'

const HelpBlock = ({name, txt, link, linkTxt}) => {

  const [active, setActive] = useState(false)
  const [height, setHeight] = useState(false)
  let helpBlockTxt = React.createRef();
  let helpBlockTxtLink = link ? React.createRef() : false
  
  useEffect(() => {
    let helpBlockTxtHeight = helpBlockTxt.current.getBoundingClientRect().height
    let helpBlockTxtLinkHeight = helpBlockTxtLink.current?helpBlockTxtLink.current.getBoundingClientRect().height:0
    let wrapHeight = helpBlockTxtHeight + helpBlockTxtLinkHeight
    link?setHeight(wrapHeight):setHeight(helpBlockTxtHeight)
  }, [helpBlockTxt]);

  return (
    <div className={css.help_block}>
      <div className={css.help_block_header}>
        <h3>{name}</h3>
        <button onClick={()=>setActive(!active)} className={css.help_block_btn_toggler + ` ${active?css.help_block_btn_toggle_act:''}`}><img src={'/imgs/icons/help_down_arrow.svg'} alt="" draggable={false}/></button>
      </div>
      <div style={{'height': ` ${height?height+'px':'inherit'}`}} className={css.help_block_txt_wrap + ` ${active?'':css.help_block_txt_wrap_hidden}`}>
        <div ref={helpBlockTxt}>
        <div className={css.help_block_txt} dangerouslySetInnerHTML={{__html: txt}} />
        {link?<a ref={helpBlockTxtLink} className={css.help_block_more_link} href={link}>{linkTxt} <img src={"/imgs/icons/hyperlink.svg"} alt="" /></a>:''}
        </div>
      </div>
    </div>
  )
}

export default HelpBlock