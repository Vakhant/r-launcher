import React from 'react'
import css from '../css/ServerInfo.module.css'

const ServerInfo = ({component}) => {
  return (
    <section className={css.server_info}>
        {component}
    </section>
  )
}

export default ServerInfo