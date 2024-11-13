import Filters from '../Filters'
import List from '../List'

import styles from './App.module.scss'

const App = () => {
  return (
    <>
      <header>
        <img className={styles.logo} src="/assets/images/logo.png" alt="logo" />
      </header>
      <div className={styles.container}>
        <Filters />
        <List />
      </div>
    </>
  )
}

export default App
