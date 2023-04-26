import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import Header from '../../components/Header/Header';
import Aside from '../../components/Aside/Aside';
import css from './MainPage.module.css'
import SettingsPage from './_/SettingsPage/SettingsPage';

const MainPage = ({pageComponent}) => {

  const [bodybg, setBodybg] = useState('')
  const [settings, setSettings] = useState('')

  let path = useLocation().pathname

  useEffect(() => {
    switch (path) {
      case '/main/prim': setBodybg(css.main_bg); break;
      case '/main/prim/first_run_page': setBodybg(css.help_bg); break;
      case '/main/monitoring':  setBodybg(css.monitoring_bg); break;
      case '/main/news': setBodybg(css.news_bg); break;
      case '/main/score': break;
      case '/main/website': break;
      case '/main/help': setBodybg(css.help_bg); break;
      case '/main/help/uchetania_zapis': setBodybg(css.help_bg); break;
      case '/main/help/errors': setBodybg(css.help_bg); break;
      case '/main/help/problems_in_game': setBodybg(css.help_bg); break;
      case '/main/help/game_store': setBodybg(css.help_bg); break;
      case '/main/help/problems_with_site': setBodybg(css.help_bg); break;
      case '/main/help/project_launcher': setBodybg(css.help_bg); break;
      case '/main/help/administstration': setBodybg(css.help_bg); break;
      case '/main/help/Faq': setBodybg(css.help_bg); break;
      default: setBodybg(css.main_bg); break;
    }
  }, [path])
  
  return (
    <section className={css.body_wrap + ' ' + bodybg}>
      <Aside/>
        <section className={css.content_body}>
          <Header settings={settings} setSettings={setSettings}/>
          {pageComponent}
          <SettingsPage settings={settings} setSettings={setSettings}/>
        </section>
    </section>
  )
}

export default MainPage