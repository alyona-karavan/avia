import { add, format } from 'date-fns'

import styles from './Ticket.module.scss'

const Ticket = ({ ticket }) => {
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' Р'
  }

  return (
    <div className={styles.ticket}>
      <div className={styles.container}>
        <div className={styles.price}>{formatPrice(ticket.price)} </div>
        <img className={styles.logo} src={`//pics.avs.io/99/36/${ticket.carrier}.png`} alt="Company logo" />
      </div>
      {ticket.segments.map((segment, index) => {
        const startDate = new Date(segment.date)
        const endDate = add(startDate, { minutes: segment.duration })

        return (
          <div key={index} className={index === 0 ? styles.firstLine : styles.secondLine}>
            <div className={styles.route}>
              <div className={styles.up}>
                {segment.origin} – {segment.destination}
              </div>
              <div className={styles.down}>
                {format(startDate, 'HH:mm')} – {format(endDate, 'HH:mm')}
              </div>
            </div>
            <div className={styles.length}>
              <div className={styles.up}>В пути</div>
              <div className={styles.down}>
                {Math.floor(segment.duration / 60)}ч {segment.duration % 60}м
              </div>
            </div>
            <div className={styles.stops}>
              <div className={styles.up}>
                {segment.stops.length === 0
                  ? 'без пересадок'
                  : segment.stops.length === 1
                    ? `${segment.stops.length} пересадка`
                    : `${segment.stops.length} пересадки`}
              </div>
              <div className={styles.down}>{segment.stops.join(', ')}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Ticket
