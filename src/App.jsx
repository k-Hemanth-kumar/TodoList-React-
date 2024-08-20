import './App.css'
import Filter from './components/filter'
import Logo from "./assets/logo(1).png"
import { useContext, useRef, useState } from 'react'
import { TodoContext } from './context/todoContext'
import Alert from './components/Alert'
import AddTodo from './components/addtodo'
function App() {
      const [isEditing,setIsEditing]=useState(false);
      const [editId,setEditId]=useState(null);
      const [editText,setEditText]=useState("");
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

        <div className='todolist-addtodo'>
          <AddTodo isEditing={isEditing} editId={editId} editText={editText} />
        </div>
      </div>
    </section>
  )
}

export default App
