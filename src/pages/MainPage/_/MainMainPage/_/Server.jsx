import React, { useState } from 'react'
import css from './css/Server.module.css'
import ChosenServer from './_/ChosenServer'
import ServerNav from './_/ServerNav'
import ServerInfoBlock from './_/ServerInfoBlock'
import serverAR from '../../../../../_data/Server.json'

const Server = () => {

  let serversList = serverAR.serversList
  const [chosenServer, setServer] = useState('NF')
	let chosenServerData = serversList.find(el=> el.key == chosenServer)

  let serverInfoList = chosenServerData.infoList
  return (
    <section className={css.server_wrap}>
      <section className={css.server}>
          <ChosenServer
              imgSrc={chosenServerData.ico?chosenServerData.ico:''}
              serverName={chosenServerData.name}
              serverColloredComment={chosenServerData.coloredComment}
              serverComment={chosenServerData.comment}
              star={chosenServerData.vip}
          />
          <ServerNav chosenServer={chosenServer} setServer={setServer} serversList={serversList}/>
      </section>
      <section className={css.server_info}>
        {serverInfoList.map(nb => <ServerInfoBlock img={nb.img} data={nb.data} name={nb.name} key={nb.id}/>)}
      </section>
    </section>
  )
}

export default Server