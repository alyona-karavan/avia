import Filters from '../Filters'
import List from '../List'
import './App.css'

const App = () => {
  return (
    <>
      <header>
        <img className="logo" src="/assets/images/logo.png" alt="logo" />
      </header>
      <div className="mainContainer">
        <Filters />
        <List />
      </div>
    </>
  )
}

export default App
