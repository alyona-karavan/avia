import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Ticket from '../Ticket'
import { changeList } from '../../store/listSlice'
import { getSearchId, getTickets } from '../../store/serviceSlice'

import styles from './List.module.scss'

const List = () => {
  const dispatch = useDispatch()
  const currentList = useSelector((state) => state.list.list)
  const { tickets, status, error, isLoading } = useSelector((state) => state.service)
  const checkedItems = useSelector((state) => state.checkbox.checkedItems)
  const [visibleTicketsCount, setVisibleTicketsCount] = useState(5)

  const handleListClick = useCallback(
    (tab) => {
      dispatch(changeList({ list: tab }))
    },
    [dispatch]
  )

  useEffect(() => {
    const initiateSearch = async () => {
      const searchIdResponse = await dispatch(getSearchId())
      if (searchIdResponse.meta.requestStatus === 'fulfilled') {
        dispatch(getTickets())
      }
    }

    initiateSearch()
  }, [dispatch])

  const fetchMoreTickets = () => {
    setVisibleTicketsCount((prevCount) => prevCount + 5)
  }

  const filteredTickets = tickets.filter((ticket) => {
    let isSegmentValid = false

    for (const segment of ticket.segments) {
      const transfersCount = segment.stops.length

      if (checkedItems.all) {
        isSegmentValid = true
        break
      }
      if (checkedItems.noTransfers && transfersCount === 0) {
        isSegmentValid = true
        break
      }
      if (checkedItems.oneTransfer && transfersCount === 1) {
        isSegmentValid = true
        break
      }
      if (checkedItems.twoTransfers && transfersCount === 2) {
        isSegmentValid = true
        break
      }
      if (checkedItems.threeTransfers && transfersCount === 3) {
        isSegmentValid = true
        break
      }
    }

    return isSegmentValid
  })

  const sortedTickets = [...filteredTickets].sort((a, b) => {
    if (currentList === 'poor') {
      return a.price - b.price
    } else if (currentList === 'fast') {
      const aDuration = a.segments.reduce((total, segment) => total + segment.duration, 0)
      const bDuration = b.segments.reduce((total, segment) => total + segment.duration, 0)
      return aDuration - bDuration
    }
    return 0
  })

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

      {isLoading && <p className={styles.textContainer}>Загрузка билетов...</p>}
      {error && <p className={styles.textContainer}>Ошибка: {error}</p>}
      {sortedTickets.length === 0 && !isLoading && !error && (
        <p className={styles.textContainer}>Рейсов, подходящих под заданные фильтры, не найдено</p>
      )}

      <ul>
        {sortedTickets.slice(0, visibleTicketsCount).map((ticket, index) => (
          <Ticket key={index} ticket={ticket} />
        ))}
      </ul>

      {status !== 'completed' && visibleTicketsCount < sortedTickets.length && (
        <button className={styles.buttonMore} onClick={fetchMoreTickets}>
          Показать еще 5 билетов!
        </button>
      )}
    </div>
  )
}

export default List
