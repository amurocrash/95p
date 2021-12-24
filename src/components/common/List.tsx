import React, { FC } from 'react'
import styles from './List.module.scss'

export enum ListOrientation {
  VERTICAL,
  HORIZONTAL
}

interface Props {
  data: any[]
  itemRender?: (item: any) => void
  orientation?: ListOrientation
}


const List:FC<Props> = ({ data, itemRender, orientation = ListOrientation.VERTICAL }) => {

  return (
    data.length === 0 
    ? 
    <div>no data for list render</div>
    :
    <ul className={ orientation === ListOrientation.VERTICAL ? styles.root : styles.root + ' ' + styles.horizontal }>
      {
        data.map((item, index) => {
          return (
            <li 
              key={ item.key ? item.key : index } 
              className={ orientation === ListOrientation.VERTICAL ? styles.itemWrapper : styles.itemWrapper + ' ' + styles.horizontal } 
              >
              { itemRender ? itemRender(item) : item }
            </li>
          )
        })
      }
    </ul>
  )
}

export default List
