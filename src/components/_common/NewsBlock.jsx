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
				<svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M4 0V2H1V0H4ZM0 9H1.5L4 6.5V3.5L0 7.5V9ZM4 0V2H5.5L4 3.5V6.5L7 3.5V8H9V0H4Z" fill="#4775C1"/>
				</svg>
				</a>:''}
			</div>
		</div>
	)
}

export default NewsBlock