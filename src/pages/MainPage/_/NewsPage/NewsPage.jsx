import React from 'react'
import Header from '../../../../components/Header/Header'
import css from './NewsPage.module.css'
import HotNews from './HotNews'
import NewsList from '../../../../components/_common/NewsList'
import newsAR from '../../../../_data/NewsList.json'

const NewsPage = () => {

  let newsList = newsAR.newsList
	let hotNews = newsList.find(el=>el.hot)

  return (
    <>
      <section className={css.news_content}>
        <HotNews hotNews={hotNews}/>
				<section className={css.news_list}>
					<NewsList news_array={newsList}/>
				</section>
			</section>

			<footer>
			</footer>
    </>
  )
}
export default NewsPage