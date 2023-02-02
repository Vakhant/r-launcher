import React, { useEffect, useRef, useState } from 'react'
import NavBlock from '../../../../components/_common/NavBlock'
import Header from '../../../../components/Header/Header'
import css from './css/HelpPage.module.css'
import { useParams } from 'react-router'
import helpAR from '../../../../_data/help.json'
import HelpBlock from './HelpBlock'

const HelpPage = () => {


  let helpNavList = helpAR.helpSectionsList
  let { section = helpNavList[0].key } = useParams();

  let helpNavMap = helpNavList.map(nb => <NavBlock navBlockName={nb.name} to={`/main/help/${nb.key}`} urlParams={section} key={nb.key} id={nb.key}/>)
	console.log(helpNavMap);
  let hotNews = helpNavList.find(el=>el.key === section)
  let sectlionBlocksList= hotNews.helpBlockList
  let sectlionBlocksMap = sectlionBlocksList.map(sb => <HelpBlock name={sb.name} txt={sb.txt} link={sb.link} linkTxt={sb.linkTxt} id={sb.id} key={sb.key}/>)


  return (
    <>
      <section className={css.help_content}>
        <h2>Частые проблемы и вопросы по игре и не только</h2>
        <section className={css.help_wrap}>
          <nav className={css.help_nav}>{helpNavMap}</nav>
          <section className={css.help_wrap_list}>
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