import React, { useState } from 'react'
import Button from '../../../components/_common/Button'
import serverAR from '../../../_data/Server.json'
import css from './FirstRunPage.module.css'
import MonitoringServerBlock from './MonitoringPage/MonitoringServerBlock'
import popupMainCSS from '../../../components/_common/css/popupMainCSS.module.css'
import PopupMain from '../../../components/_common/PopupMain'

const FirstRunPage = () => {
  const [popupAct, setPopupAct] = useState(false)
    
  let serversBlocksList = serverAR.serversList[1]
  console.log(serversBlocksList);
  return (
    <>
        <div className={css.first_run_content}>
            <div className={css.first_run_txt}><div>Благодарим за установку и добро пожаловать в «<span className={css.first_run_txt_blod}>Rapid Motion Launcher</span>»!<br/>
            В разделах «<span className={css.first_run_txt_blod}>Главная</span>» & «<span className={css.first_run_txt_blod}>Мониторинг</span>» вы можете выбрать для себя понравившийся<br/>
            сервер и начать на нем игру. Желаем приятной игры!</div></div>
            <div className={css.first_run_txt}>
                <div>Рекомендованный сервер для игры — <span className={css.first_run_server_name}>Rapid Motion / Fallen Mercury #2</span><br/>
                В настоящее время проходит акция<br/>
                «<span className={css.first_run_main_comment}>X2 на первое пополнение игрового счета (RC) / Осталось 2 дня</span>»</div>
                {<MonitoringServerBlock firstRunPageRecS={true} keyN={serversBlocksList.key} imgSrc={process.env.PUBLIC_URL+serversBlocksList.monitoring_ico} infoCall={setPopupAct} serverName={serversBlocksList.name} serverColloredComment={serversBlocksList.coloredComment} star={serversBlocksList.vip}
                nameColor={serversBlocksList.nameColor} chosen={serversBlocksList.chosen} key={serversBlocksList.id} id={serversBlocksList.id}/>}
                {/* <div className={css.first_run_server_block}>
                    <div className={css.first_run_server_icon_wrap}><img src={process.env.PUBLIC_URL+'/imgs/icons/settings_page/server_FM.svg'} alt="" /></div>
                    <div className={css.first_run_server_main_info}>
                        <div className={css.first_run_server_block_name}>Fallen Mercury / 2</div>
                        <div className={css.first_run_server_users_count}>Игроков онлайн 300 / 300</div>
                    </div>
                    <img className={css.first_run_server_star} src={process.env.PUBLIC_URL+'/imgs/icons/main_page/star.svg'} alt="" />
                    <div className={css.first_run_special}>x 2</div>
                </div> */}
            </div>
            <Button style={{'width':'378px', 'marginTop':'29px', 'height':'37px'}} buttonStyle={'gradBtn'} link={'#'} content={<><span> Принять информацию и перейти к лаунчеру</span></>}/>
        
      
          {/* у окна три состояния type=(alert - red, attention - yellow, info - green) */}
          <PopupMain active={popupAct} activate={setPopupAct} header={'Информация по акции'} type={'info'} content={<>
        <span className={popupMainCSS.popup_name_comment}>X2 при пополнении</span>
        <div className='grey_txt'>Специально для новых игроков, действует акция
«X2 при пополнении». Акция действует только
при первом пополнении!
          </div>
          {/* <Button style={{'width':'282px', 'height': "38px", 'margin': '0 0 5px 0'}} buttonStyle={'greyBtn'} content={'Переслать письмо подтверждения'} /> */}
          </>}/>
        
        </div>
    </>
  )
}

export default FirstRunPage