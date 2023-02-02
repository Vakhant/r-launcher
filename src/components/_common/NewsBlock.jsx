import React from 'react'
import css from './css/NewsBlock.module.css'

const NewsBlock = ({img, name, date, txt, page, link}) => {
	let customClasses = page === '/news' ? css.NewsPage_news_list_block : 
						page === '/main' ? css.MainPage_news_list_block : ''
	return (
		<div className={css.news_list_block + ' ' + customClasses}>
			<img width="150" height="92" src={img} alt="" className="news_list_block_img"/>
			<div className={css.news_list_block_info}>
				<div className={css.news_list_block_name}>{name}</div>
				<div className={css.news_list_block_date}>{date}</div>
				<div className={css.news_list_block_txt + ` ${link?css.news_list_block_txt_hide:''}`}>{txt}</div>
				{link?<a href={link} className={css.news_list_block_link}>ПОДРОБНЕЕ 
				<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M5 0V2H2V0H5ZM0 10H2L5 7V3L0 8V10ZM5 0V2H6L5 3V7L8 4V8H10V0H5Z" fill="#4775C1"/>
				</svg></a>:''}
			</div>
		</div>
	)
}

export default NewsBlock