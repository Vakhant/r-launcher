import React, { useEffect, useState } from 'react'
import css from './css/HelpBlock.module.css'

const HelpBlock = ({scrollHeightTrigger, setScrollHeightTrigger, name, txt, link, linkTxt}) => {

  const [active, setActive] = useState(false)
  const [height, setHeight] = useState(false)
  let helpBlockTxt = React.createRef();
  let helpBlockTxtLink = link ? React.createRef() : false
  
  useEffect(() => {
    let helpBlockTxtHeight = link ? helpBlockTxt.current.getBoundingClientRect().height - 24 : helpBlockTxt.current.getBoundingClientRect().height - 18
    let helpBlockTxtLinkHeight = helpBlockTxtLink.current?helpBlockTxtLink.current.getBoundingClientRect().height:0
    let wrapHeight = helpBlockTxtHeight + helpBlockTxtLinkHeight
    link?setHeight(wrapHeight):setHeight(helpBlockTxtHeight)
  }, [helpBlockTxt]);
  let timeoutedHeightRegister = () => setTimeout(()=>{setScrollHeightTrigger(!scrollHeightTrigger)},800)
  return (
    <div className={css.help_block}>
      <div className={css.help_block_header}>
        <h3>{name}</h3>
        <button onClick={()=>{setActive(!active);timeoutedHeightRegister()}} className={css.help_block_btn_toggler + ` ${active?css.help_block_btn_toggle_act:''}`}>
          <img className={css.help_block_btn_toggler_img} src={process.env.PUBLIC_URL+'/imgs/icons/main_page/select_function.svg'} alt="" draggable={false}/>
          <img className={css.help_block_btn_toggler_img_reverse} src={process.env.PUBLIC_URL+'/imgs/icons/main_page/select_function.svg'} alt="" draggable={false}/>
        </button>
      </div>
      <div style={{'height': ` ${height?height+'px':'inherit'}`}} className={css.help_block_txt_wrap + ` ${active?'':css.help_block_txt_wrap_hidden}`}>
        <div ref={helpBlockTxt}>
        <div className={css.help_block_txt} dangerouslySetInnerHTML={{__html: txt}} />
        {link?<a ref={helpBlockTxtLink} className={css.help_block_more_link} href={link}>{linkTxt} <img src={process.env.PUBLIC_URL+"/imgs/icons/hyperlink.svg"} alt="" /></a>:''}
        </div>
      </div>
    </div>
  )
}

export default HelpBlock