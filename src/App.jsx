import './App.css'
import Filter from './components/filter'
import Logo from "./assets/logo(1).png"
import { useContext, useRef, useState } from 'react'
import { TodoContext } from './context/todoContext'
import Alert from './components/Alert'
import AddTodo from './components/addtodo'
import TodoList from './components/todolist'
import Modal from './components/deletemodal'
function App() {
      const {alert,setAlert,showAlert,filterTodoTasks,isEditing,setIsEditing,editId,setEditId,editText,setEditText,isModalopen}=useContext(TodoContext);

      const filterTodos=filterTodoTasks();
      const editHandler=(todo)=>{
        console.log(todo)
        setIsEditing(true);
        setEditId(todo.id);
        setEditText(todo.title)
      }
  return (
    <section className='todo-list'>
      {isModalopen&& <Modal/>}
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
        <div className='todolist-body'>
          <TodoList filterTodos={filterTodos} editHandler={editHandler} />
        </div>
        <div className='todolist-addtodo'>
          <AddTodo />
        </div>
      </div>
    </section>
  )
}

export default App;
