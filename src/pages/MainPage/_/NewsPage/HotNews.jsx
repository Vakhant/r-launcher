import React from 'react'
import Button from '../../../../components/_common/Button'
import btnCustomClasses from '../../../../components/_common/css/Button.module.css'
import css from './HotNews.module.css'

const HotNews = ({hotNews}) => {
  return (
    <section className={css.hot_news}>
        <img className={css.hot_news_img} width="266" height="166" src={process.env.PUBLIC_URL+hotNews.img} alt=""/>
        <div className={css.hot_news_info}>
            <div className={css.hot_news_header}>
                <div className={css.hot_news_name}>{hotNews.name}</div>
                <div className={css.hot_news_date}>{hotNews.date}</div>
                <img className={css.hot_news_ico} width="46" height="66" src={process.env.PUBLIC_URL+"/imgs/icons/fire.svg"} alt=""/>
            </div>
            <div className={css.hot_news_txt}>{hotNews.txt}</div>
            <div className={css.hot_news_nav}>
                <Button buttonStyle={'gradBtn'} customClasses={btnCustomClasses.hot_news_watch} onClickFun={()=>{console.log('test');}} 
                link={false} content={
                <><img className={btnCustomClasses.hot_news_watch_icon} width="11" height="14" src={process.env.PUBLIC_URL+"/imgs/icons/play_game.svg"} alt=""/>
                <span> Смотреть видео</span></>
                }/>
                <Button buttonStyle={'greyBtn'} customClasses={btnCustomClasses.hot_news_more} link={'#'} content='Подробнее'/>
            </div>
        </div>
    </section>
  )
}

export default HotNews