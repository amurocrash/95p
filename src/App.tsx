import React from 'react'
import './App.scss'
import Tab, { TabItem } from './components/common/Tab'
import My from './components/core/My'
import Sell from './components/core/Sell'
import Shopping from './components/core/Shopping'

const App = () => {
  const tabData:TabItem[] = [
    {
      icon: '',
      title: '购买',
      name: 'shopping',
      component: Shopping
    },
    {
      icon: '',
      title: '卖闲置',
      name: 'sell',
      component: Sell
    },
    {
      icon: '',
      title: '我的',
      name: 'my',
      component: My
    }
  ]

  return (
    <div className='App'>
      <Tab tabData={ tabData }></Tab>
    </div>
  )
}

export default App

