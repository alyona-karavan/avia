import styles from './Ticket.module.scss'

const Ticket = () => {
  return (
    <div className={styles.ticket}>
      <div className={styles.container}>
        <div className={styles.price}>13 400 Р </div>
        <img className={styles.logo} src="assets/images/S7 Logo.png" alt="Company logo" />
      </div>
      <div className={styles.firstLine}>
        <div className={styles.route}>
          <div className={styles.up}>MOW – HKT</div>
          <div className={styles.down}>10:45 – 08:00</div>
        </div>
        <div className={styles.length}>
          <div className={styles.up}>В пути</div>
          <div className={styles.down}>21ч 15м</div>
        </div>
        <div className={styles.stops}>
          <div className={styles.up}>2 пересадки</div>
          <div className={styles.down}>HKG, JNB</div>
        </div>
      </div>
      <div className={styles.secondLine}>
        <div className={styles.route}>
          <div className={styles.up}>MOW – HKT</div>
          <div className={styles.down}>11:20 – 00:50</div>
        </div>
        <div className={styles.length}>
          <div className={styles.up}>В пути</div>
          <div className={styles.down}>13ч 30м</div>
        </div>
        <div className={styles.stops}>
          <div className={styles.up}>1 пересадка</div>
          <div className={styles.down}>HKG</div>
        </div>
      </div>
    </div>
  )
}

export default Ticket
