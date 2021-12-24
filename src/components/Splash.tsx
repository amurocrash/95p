import React, { FC, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './Splash.module.scss'

const Splash: FC = () => {
  const history = useHistory()

  useEffect(() => {
    setTimeout(() => {
      history.replace('/')
    }, 2000)
  })

  return (
    <div　className={ styles.root }>
      <div className={ styles.title }>
        挑到好东西
      </div>
      <div className={ styles.subtitle }>95分</div>
    </div>
  )
}

export default Splash
