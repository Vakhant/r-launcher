import React, { useEffect, useRef, useState } from 'react'
import NavBlock from '../../../../components/_common/NavBlock'
import css from './css/HelpPage.module.css'
import { useParams } from 'react-router'
import helpAR from '../../../../_data/help.json'
import HelpBlock from './HelpBlock'

const HelpPage = () => {

  const [scrollHeightTrigger, setScrollHeightTrigger] = useState(false)

  let helpNavList = helpAR.helpSectionsList
  let { section = helpNavList[0].key } = useParams();

  let helpNavMap = helpNavList.map(nb => <NavBlock navBlockName={nb.name} to={`/main/help/${nb.key}`} urlParams={section} key={nb.key} id={nb.key}/>)
  let hotNews = helpNavList.find(el=>el.key === section)
  let sectlionBlocksList= hotNews.helpBlockList
  let sectlionBlocksMap = sectlionBlocksList.map(sb => <HelpBlock scrollHeightTrigger={scrollHeightTrigger} setScrollHeightTrigger={setScrollHeightTrigger} name={sb.name} txt={sb.txt} link={sb.link} linkTxt={sb.linkTxt} id={sb.id} key={sb.key}/>)

  let helpScroll = React.createRef();
  const [scrollH, setScrollH] = useState(1)
  useEffect(() => {
    if(helpScroll.current.scrollHeight>helpScroll.current.clientHeight&&scrollH===1){
      setScrollH(0)
    }
    if(helpScroll.current.scrollHeight<=helpScroll.current.clientHeight){
      setScrollH(1)
    }
  }, [scrollHeightTrigger, scrollH])
  

  return (
    <>
      <section className={css.help_content}>
        <h2>Частые проблемы и вопросы по игре и не только</h2>
        <section className={css.help_wrap+` ${scrollH===0?css.help_wrap_scroll_light:''}`}>
          <nav className={css.help_nav}>{helpNavMap}</nav>
          <section ref={helpScroll} onScroll={()=>setScrollH(helpScroll.current.scrollTop)} className={css.help_wrap_list}>
            <section className={css.help_wrap_list_wrap}>
              {sectlionBlocksMap}
            </section>
          </section>
        </section>
      <footer></footer>
			</section>
    </>
  )
}

export default HelpPage