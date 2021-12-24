import React, { FC, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './Tab.module.scss'
import TabCell from './TabCell'

export interface TabItem {
  icon: string
  title: string
  name: string
  component?: FC
}

interface Props {
  tabData: TabItem[]
}

const Tab:FC<Props> = ({ tabData }) => {
  const [tabIndex, setTabIndex] = useState<number>(0)
  const history = useHistory()

  useEffect(() => {
    const pathname = history.location.pathname.substring(1)
    const index = tabData.findIndex(data => data.name === pathname)
    if (index > -1) {
      setTabIndex(index)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history])

  useEffect(() => {
    const pathname = tabData[tabIndex].name
    history.replace('/' + pathname)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabIndex])

  return (
    <div className={ styles.root }>
      <div className={ styles.bottomWrapper }>
        {
          tabData.map((tabItem, index) => {
            return <TabCell key={ index } tabItem={ tabItem } active={ tabIndex === index } onClick={ () => setTabIndex(index) }></TabCell>
          })
        } 
      </div>
      <div className={ styles.contentWrapper}>
        {
          tabData[tabIndex].component ? 
          React.createElement(tabData[tabIndex].component as FC) :
          <div>null</div>
        }
      </div>
      
    </div>
  )
}

export default Tab
