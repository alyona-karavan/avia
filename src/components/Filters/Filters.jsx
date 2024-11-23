import { useDispatch, useSelector } from 'react-redux'

import { toggleCheckbox } from '../../store/checkboxSlice'

import styles from './Filters.module.scss'

const Filters = () => {
  const dispatch = useDispatch()
  const checkedItems = useSelector((state) => state.checkbox.checkedItems)

  const handleCheckboxChange = (checkboxName) => {
    dispatch(toggleCheckbox({ checkboxName }))
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Количество пересадок</h2>
      <ul>
        <li>
          <label className={styles.filter}>
            <input
              className={styles.checkbox}
              type="checkbox"
              name="all"
              onChange={() => handleCheckboxChange('all')}
              checked={checkedItems.all}
            />
            <span className={styles.checkmark}></span>
            Все
          </label>
        </li>
        <li>
          <label className={styles.filter}>
            <input
              className={styles.checkbox}
              type="checkbox"
              name="noTransfers"
              onChange={() => handleCheckboxChange('noTransfers')}
              checked={checkedItems.noTransfers}
            />
            <span className={styles.checkmark}></span>
            Без пересадок
          </label>
        </li>
        <li>
          <label className={styles.filter}>
            <input
              className={styles.checkbox}
              type="checkbox"
              name="oneTransfer"
              onChange={() => handleCheckboxChange('oneTransfer')}
              checked={checkedItems.oneTransfer}
            />
            <span className={styles.checkmark}></span>1 пересадка
          </label>
        </li>
        <li>
          <label className={styles.filter}>
            <input
              className={styles.checkbox}
              type="checkbox"
              name="twoTransfers"
              onChange={() => handleCheckboxChange('twoTransfers')}
              checked={checkedItems.twoTransfers}
            />
            <span className={styles.checkmark}></span>2 пересадки
          </label>
        </li>
        <li>
          <label className={styles.filter}>
            <input
              className={styles.checkbox}
              type="checkbox"
              name="threeTransfers"
              onChange={() => handleCheckboxChange('threeTransfers')}
              checked={checkedItems.threeTransfers}
            />
            <span className={styles.checkmark}></span>3 пересадки
          </label>
        </li>
      </ul>
    </section>
  )
}

export default Filters
