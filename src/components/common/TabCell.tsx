import React, { FC } from 'react'
import { TabItem } from './Tab'
import styles from './TabCell.module.scss'

interface Props {
  tabItem: TabItem
  active: boolean
  onClick: () => void
}

const TabCell:FC<Props> = ({ tabItem, active = false, onClick }) => {

  return (
    <div className={ styles.root } onClick={ onClick }>
      <div></div>
      <div className={ active ? styles.title + ' ' + styles.active : styles.title }>{ tabItem.title }</div>
    </div>
  )
}

export default TabCell
