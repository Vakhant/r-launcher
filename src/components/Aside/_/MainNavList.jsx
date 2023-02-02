import React from 'react'
import NavBlock from '../../_common/NavBlock'
import css from './css/MainNavList.module.css'

const MainNavList = () => {
    let mainNavList = [
        {id: 1, name: 'Главная', to: '/main/prim', outLink: false},
        {id: 2, name: 'Мониторинг', to: '/main/monitoring', outLink: false},
        {id: 3, name: 'Новости', to: '/main/news', outLink: false},
        {id: 4, name: 'Магазин', to: '#', outLink: true},
        {id: 5, name: 'Сайт', to: '#', outLink: true},
        {id: 6, name: 'Помощь', to: '/main/help', outLink: false},
    ]
    let mainNavMap = mainNavList.map(nb => <NavBlock navBlockName={nb.name} to={nb.to} key={nb.id} id={nb.id} outLink={nb.outLink}/>)
    
    return <nav className={css.main_type_nav}>{mainNavMap}</nav>
}

export default MainNavList