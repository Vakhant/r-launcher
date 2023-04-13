import React, { useState } from 'react'
import css from './css/Server.module.css'
import ChosenServer from './_/ChosenServer'
import ServerNav from './_/ServerNav'
import ServerInfoBlock from './_/ServerInfoBlock'
import serverAR from '../../../../../_data/Server.json'
import ServerInfo from './_/ServerInfo'

const Server = () => {

  let serversList = serverAR.serversList
  const [chosenServer, setServer] = useState('NF')
	let chosenServerData =  serversList.map(el=> <ServerInfo key={el.key} component={el.infoList.map(nb => <ServerInfoBlock active={el.key===chosenServer} img={process.env.PUBLIC_URL+nb.img} data={nb.data} name={nb.name} key={nb.id}/>)}/>)
	let serversListMap = serversList.map(cs=> <ChosenServer
    nameColor={cs.nameColor}
    chosenServer={chosenServer}
    active={cs.key===chosenServer}
    imgSrc={cs.ico?process.env.PUBLIC_URL+cs.ico:''}
    serverName={cs.name}
    serverColloredComment={cs.coloredComment}
    serverComment={cs.comment}
    star={cs.markared}
    key={cs.key}
  />)


  return (
    <section className={css.server_wrap}>
      <section className={css.server}>
          <div className={css.servers_list}>
            {serversListMap}
          </div>
          <ServerNav serversListLength={serverAR.serversList.length} chosenServer={chosenServer} setServer={setServer} serversList={serversList}/>
      </section>
      <section className={css.server_info_wrap_list}>
        {chosenServerData}
      </section>
    </section>
  )
}

export default Server