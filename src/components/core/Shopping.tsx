import React, { useEffect, useRef, useState } from 'react'
import List, { ListOrientation } from '../common/List'
import styles from './Shop.module.scss'

const Shopping = () => {
  const sloganWrapper = useRef<HTMLDivElement>(null)
  const [fixNavi, setFixNavi] = useState<boolean>(false)

  const onScroll = () => {
    const sloganWrapperHeight = sloganWrapper.current?.clientHeight as number
    if (window.scrollY > sloganWrapperHeight) {
      setFixNavi(true)
    } else {
      setFixNavi(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  })

  // const navi = useRef<HTMLDivElement>(null)
  // const [naviHeight, setNaviHeight] = useState<number>(0)
  // useEffect(() => {
  //   if (fixNavi) {
  //     const height = navi.current?.getBoundingClientRect().height as number
  //     console.log(height)
  //     setNaviHeight(height)
  //   } else {
  //     setNaviHeight(0)
  //   }
  // }, [fixNavi])

  const categoryData = ['推荐', '直播', '潮鞋', '数码', '潮服', '手机', '箱包', '腕表', '配饰', '潮玩', '游戏', '服饰', '球星卡', 'test1', 'test2', 'test3', 'test4']

  return (
    <div className={ styles.root }>

      <div className={ styles.sloganWrapper } ref={ sloganWrapper }>
        <span className={ styles.main }>联合得物 正品保障</span>
        <span className={ styles.sub }>逐件查验 + 商品实拍 + 清洁杀菌</span>
      </div>

      <div className={ fixNavi ? styles.navi + ' ' + styles.fix : styles.navi }>
        <div className={ styles.searchWrapper}>
          <div className={ styles.recommend}>
            牛仔裤
          </div>
          <div className={ styles.all }>
            All
          </div>
        </div>
        <div className={ styles.categoryWrapper }>
          <List data={ categoryData } orientation={ ListOrientation.HORIZONTAL } ></List>
        </div>
      </div>
      {
        fixNavi ? <div style={{ height: 276.75 }}></div> : null
      }

      <div className={ styles.selectionWrapper }>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </div>

      <div>exclusive</div>
      <div>extra</div>
      <div>list</div>
      <div>
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(i => {
            return <div key={i} style={{ height: '3rem' }}>{ i }</div>
          })
        }
      </div>
    </div>
  )
}

export default Shopping
