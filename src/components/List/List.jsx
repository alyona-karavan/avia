import Ticket from '../Ticket'
import './List.css'

const List = () => {
  return (
    <div className="list">
      <ul className="tabs">
        <li className="tab active">Самый дешевый</li>
        <li className="tab">Самый быстрый</li>
        <li className="tab">Оптимальный</li>
      </ul>
      <ul className="tickets">
        <Ticket />
      </ul>
      <button className="buttonMore">Показать еще 5 билетов!</button>
    </div>
  )
}

export default List
