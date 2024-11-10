import './Filters.css'

const Filters = () => {
  const filterOptions = [
    { id: 'option-all', value: 'all', label: 'Все' },
    { id: 'option-no-transfers', value: 'noTransfers', label: 'Без пересадок' },
    { id: 'option-one-transfer', value: 'oneTransfer', label: '1 пересадка' },
    { id: 'option-two-transfers', value: 'twoTransfers', label: '2 пересадки' },
    { id: 'option-three-transfers', value: 'threeTransfers', label: '3 пересадки' },
  ]

  return (
    <section className="filtersSection">
      <h2 className="filtersTitle">Количество пересадок</h2>
      <ul className="filters">
        {filterOptions.map((option) => (
          <li key={option.id}>
            <label className="filter">
              <input className="checkbox" type="checkbox" name={option.value} />
              <span className="checkmark"></span>
              {option.label}
            </label>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Filters
