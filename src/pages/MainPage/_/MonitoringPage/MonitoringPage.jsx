import React, { useEffect, useState } from 'react'
import Header from '../../../../components/Header/Header'
import css from './css/MonitoringPage.module.css'
import MonitoringServerBlock from './MonitoringServerBlock.jsx'
import serverAR from '../../../../_data/Server.json'
import PopupMain from '../../../../components/_common/PopupMain'


const MonitoringPage = () => {
  let serversBlocksList = serverAR.serversList

  const [popupAct, setPopupAct] = useState(false)
  const [scrollHide, setScrollHide] = useState(false)

  const [chosenServer, setChosenServer] = useState(serverAR.serversList.find(s => s.chosen===true).id)
  const [localSrvrBlckLi, setLocalSrvrBlckLi] = useState(serversBlocksList)
  
  useEffect(() => {
    let serverUnchoosendToBe = localSrvrBlckLi.find(s => s.chosen===true).id
  
    const employees = [...localSrvrBlckLi];
    employees[serverUnchoosendToBe-1] = {...localSrvrBlckLi[serverUnchoosendToBe-1],'chosen': false}
    employees[chosenServer-1] = {...localSrvrBlckLi[chosenServer-1],'chosen': true}
    setLocalSrvrBlckLi(employees);
  }, [chosenServer])
  

  let serverList = React.createRef();
  useEffect(() => {
    serverList.current.getBoundingClientRect().scrollHeight - serverList.current.getBoundingClientRect().height < 10 ?
    setScrollHide(true) : setScrollHide(false)
  }, [serverList])
  


  return (
    <>
      <section className={css.monitoring_content}>
      <div className={css.all_servers_info}><div className={css.all_servers_info_txt}>Общий онлайн на всех 3 серверах</div>
        <div className={css.all_servers_info_users_number}><img src={process.env.PUBLIC_URL+"/imgs/icons/monitoring/g_online.svg"} alt="" /> 900 / 900</div></div>
        <div ref={serverList} className={css.servers_list + ` ${css.server_list_scroll_hidden}`}>
          {localSrvrBlckLi.map(sb => <MonitoringServerBlock keyN={sb.key} chosenServer={chosenServer} setChosenServer={setChosenServer} infoCall={setPopupAct} imgSrc={process.env.PUBLIC_URL+sb.monitoring_ico} serverName={sb.name} serverColloredComment={sb.coloredComment} star={sb.vip}
           nameColor={sb.nameColor} chosen={sb.chosen} key={sb.id} id={sb.id}/>)}
        </div>
        <PopupMain active={popupAct} activate={setPopupAct} header={'Информация по акции'} type={'info'} content={<>X2 при пополнении<br /> <div className='grey_txt'>Специально для новых игроков, действует акция
          «X2 при пополнении». Акция действует только
          при первом пополнении!</div></>}/>
        <footer></footer>
      </section>
    </>
  )
}

export default MonitoringPage