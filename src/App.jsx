import './App.css'
import Filter from './components/filter'
import Logo from "./assets/logo(1).png"
import { useContext } from 'react'
import { TodoContext } from './context/todoContext'
import Alert from './components/Alert'
function App() {

  const {alert,setAlert,showAlert}=useContext(TodoContext)

  return (
    <section className='todo-list'>
      <div className="todolist-container">
        <div className="todolist-header">
          <div className="todolist-logo-area">
            <div className='todolist-logo' style={{width:'150px'}}>
              <img src={Logo} alt="todoList_logo" width={'100%'} />
            </div>
          </div>
          {
            alert.show &&(
              <Alert {...alert} removeAlert={showAlert} />
            )
          }
          <Filter/>
        </div>
      </div>
    </section>
  )
}

export default App
