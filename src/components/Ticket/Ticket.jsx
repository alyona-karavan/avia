import './Ticket.css'

const Ticket = () => {
  return (
    <div className="ticket">
      <div className="container">
        <div className="price">13 400 Р </div>
        <img src="assets/images/S7 Logo.png" alt="Company logo" className="logoCompany" />
      </div>
      <div className="from">
        <div className="route">
          <div className="cities up">MOW – HKT</div>
          <div className="time down">10:45 – 08:00</div>
        </div>
        <div className="length">
          <div className="onWay up">В пути</div>
          <div className="time down">21ч 15м</div>
        </div>
        <div className="stops">
          <div className="transfers up">2 пересадки</div>
          <div className="cities down">HKG, JNB</div>
        </div>
      </div>
      <div className="to">
        <div className="route">
          <div className="cities up">MOW – HKT</div>
          <div className="time down">11:20 – 00:50</div>
        </div>
        <div className="length">
          <div className="onWay up">В пути</div>
          <div className="time down">13ч 30м</div>
        </div>
        <div className="stops">
          <div className="transfers up">1 пересадка</div>
          <div className="cities down">HKG</div>
        </div>
      </div>
    </div>
  )
}

export default Ticket
