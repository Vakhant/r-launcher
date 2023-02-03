import React from 'react'
import { BrowserRouter, HashRouter, Navigate, redirect, Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';
import MainPage from './pages/MainPage/MainPage';
import MonitoringPage from './pages/MainPage/_/MonitoringPage/MonitoringPage';
import NewsPage from './pages/MainPage/_/NewsPage/NewsPage';
import HelpPage from './pages/MainPage/_/HelpPage/HelpPage';
import MainMainPage from './pages/MainPage/_/MainMainPage/MainMainPage';
import Welcome from './pages/MainPage/_/Install/Welcome';
import InstallPath from './pages/MainPage/_/Install/InstallPath';
import InstallApp from './pages/MainPage/_/Install/InstallApp';
import InstallEnd from './pages/MainPage/_/Install/InstallEnd';
import Update from './pages/MainPage/_/Install/Update';
import FirstRunPage from './pages/MainPage/_/FirstRunPage';
import ServerFooter from './pages/MainPage/_/MainMainPage/_/ServerFooter';

function App() {
  return (
    <HashRouter>
          <Routes>
              <Route path="/" element={<MainPage pageComponent={<MainMainPage/>}/>}/>
              <Route path="*" element={<MainPage pageComponent={<MainMainPage/>}/>}/>
              <Route index element={<MainPage pageComponent={<MainMainPage/>}/>}/>
              <Route path="main/prim/first_run_page" element={<MainPage pageComponent={<FirstRunPage/>}/>}/>
              <Route path="main/prim" element={<MainPage pageComponent={<MainMainPage/>}/>}/>
              <Route path="main/monitoring" element={<MainPage pageComponent={<MonitoringPage/>}/>}/>
              <Route path="main_install_update" element={<MainPage pageComponent={<ServerFooter servFootStt='update'/>}/>}/>
              <Route path="main_install_download" element={<MainPage pageComponent={<ServerFooter servFootStt='download'/>}/>}/>
              <Route path="main_install_check" element={<MainPage pageComponent={<ServerFooter servFootStt='check'/>}/>}/>
              <Route path="main_install_all-good" element={<MainPage pageComponent={<ServerFooter servFootStt='all-good'/>}/>}/>
              <Route path="main_install_disconnect" element={<MainPage pageComponent={<ServerFooter servFootStt='disconnect'/>}/>}/>
              <Route path="main_install_update-alert" element={<MainPage pageComponent={<ServerFooter servFootStt='update-alert'/>}/>}/>
              <Route path="main_install_install-alert" element={<MainPage pageComponent={<ServerFooter servFootStt='install-alert'/>}/>}/>
              <Route path="main/news" element={<MainPage pageComponent={<NewsPage/>}/>}/>
              <Route exact path="main/help" element={<MainPage pageComponent={<HelpPage/>}/>}/>
              <Route exact path="main/help/:section" element={<MainPage pageComponent={<HelpPage/>}/>}/>
              <Route path="main" element={<MainPage pageComponent={<MainMainPage/>}/>}/>
            <Route path="/auth/:auth_page" element={<AuthPage/>}/>
            <Route path="/install/welcome" element={<Welcome/>}/>
            <Route path="/install/install_path" element={<InstallPath/>}/>
            <Route path="/install/install_app" element={<InstallApp/>}/>
            <Route path="/install/install_end" element={<InstallEnd/>}/>
            <Route path="/install/update" element={<Update/>}/>
          </Routes>
    </HashRouter>
  );
}

export default App;
