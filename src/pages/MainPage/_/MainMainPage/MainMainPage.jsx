import React, { useState } from 'react'
import css from './_/css/MainMainPage.module.css'
import NewsList from '../../../../components/_common/NewsList'
import Server from './_/Server'
import ServerFooter from './_/ServerFooter'
import PopupMain from '../../../../components/_common/PopupMain'
import newsAR from '../../../../_data/NewsList.json'
import InstallPathPage from './_/_/InstallPathPage/InstallPathPage'

const MainMainPage = () => {
  const [ipthPage, setIpthPage] = useState(true)
  let newsList = newsAR.mainNewsList
  return (
    <>
      <section className={css.main_content}>
        <Server/>
        <section className={css.news_wrap}>
          <NewsList news_array={newsList}/>
        </section>
        <ServerFooter/>
        <PopupMain header={'Ошибка #513'} type={'info'} content={<>Ошибка системы! Текущая версия Windows «x32».<br /> <div className='grey_txt'>Необходимая версия «x64».</div></>}/>
        <InstallPathPage ipthPage={ipthPage} setIpthPage={setIpthPage}/>
      </section>
    </>
  )
}

export default MainMainPage