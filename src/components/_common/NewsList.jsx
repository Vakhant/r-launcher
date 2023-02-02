import React from 'react'
import NewsBlock from './NewsBlock'

const NewsList = ({news_array, without_hot=true}) => {
  let page = window.location.pathname
    let newsListMap = news_array.map(nb => without_hot?
      nb.hot?'':<NewsBlock page={page} img={nb.img} name={nb.name} date={nb.date} txt={nb.txt} key={nb.id} link={nb.link}/>:
      <NewsBlock page={page} img={nb.img} name={nb.name} date={nb.date} txt={nb.txt} key={nb.id} link={nb.link}/>
      )
  return <>{newsListMap}</>
}

export default NewsList