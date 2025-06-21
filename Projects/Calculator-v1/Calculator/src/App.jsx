import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './App.module.css'
import Display_ip from './components/Display_ip'
import ButtonsContainer from './components/ButtonsContainer'

function App() {

  return (
    <>
      <div className={styles["calculator"]} >
        <Display_ip />
        <ButtonsContainer />
      </div>
      
    </>
  )
}

export default App
