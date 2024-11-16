import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Ticket from '../Ticket'
import { changeList } from '../../store/listSlice'

import styles from './List.module.scss'

const List = () => {
  const dispatch = useDispatch()
  const currentList = useSelector((state) => state.list.list)

  const handleListClick = useCallback(
    (tab) => {
      dispatch(changeList({ list: tab }))
    },
    [dispatch]
  )

  return (
    <div className={styles.list}>
      <ul className={styles.container}>
        <li
          className={`${styles.tab} ${currentList === 'poor' ? styles.active : ''} ${styles.poor}`}
          onClick={() => handleListClick('poor')}
        >
          Самый дешевый
        </li>
        <li
          className={`${styles.tab} ${currentList === 'fast' ? styles.active : ''} ${styles.fast}`}
          onClick={() => handleListClick('fast')}
        >
          Самый быстрый
        </li>
        <li
          className={`${styles.tab} ${currentList === 'optima' ? styles.active : ''} ${styles.optima}`}
          onClick={() => handleListClick('optima')}
        >
          Оптимальный
        </li>
      </ul>
      <ul>
        <Ticket />
      </ul>
      <button className={styles.buttonMore}>Показать еще 5 билетов!</button>
    </div>
  )
}

export default List
