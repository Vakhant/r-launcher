import React from 'react'
import Button from '../../../../components/_common/Button'
import btnCustomClasses from '../../../../components/_common/css/Button.module.css'
import css from './HotNews.module.css'

const HotNews = ({hotNews}) => {
  return (
    <section className={css.hot_news}>
        <img className={css.hot_news_img} width="266" height="165" src={hotNews.img} alt=""/>
        <div className={css.hot_news_info}>
            <div className={css.hot_news_header}>
                <div className={css.hot_news_name}>{hotNews.name}</div>
                <div className={css.hot_news_date}>{hotNews.date}</div>
                <img className={css.hot_news_ico} width="46" height="66" src={"/imgs/icons/fire.svg"} alt=""/>
            </div>
            <div className={css.hot_news_txt}>{hotNews.txt}</div>
            <div className={css.hot_news_nav}>
                <Button buttonStyle={'gradBtn'} customClasses={btnCustomClasses.hot_news_watch} onClickFun={()=>{console.log('test');}} 
                link={false} content={
                <><img className={btnCustomClasses.hot_news_watch_icon} width="13" height="16" src={"/imgs/icons/play_video.svg"} alt=""/>
                <span> Смотреть видео</span></>
                }/>
                <Button buttonStyle={'greyBtn'} customClasses={btnCustomClasses.hot_news_more} link={'#'} content='Подробнее'/>
            </div>
        </div>
    </section>
  )
}

export default HotNews