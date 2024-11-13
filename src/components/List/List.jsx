import Ticket from '../Ticket'

import styles from './List.module.scss'

const List = () => {
  return (
    <div className={styles.list}>
      <ul className={styles.container}>
        <li className={`${styles.tab} ${styles.active} ${styles.poor}`}>Самый дешевый</li>
        <li className={`${styles.tab} ${styles.fast}`}>Самый быстрый</li>
        <li className={`${styles.tab} ${styles.optima}`}>Оптимальный</li>
      </ul>
      <ul>
        <Ticket />
      </ul>
      <button className={styles.buttonMore}>Показать еще 5 билетов!</button>
    </div>
  )
}

export default List
