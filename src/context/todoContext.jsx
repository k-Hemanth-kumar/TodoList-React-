import { createContext, useState } from "react";
import filterValues from "../constants";

export const TodoContext=createContext();

export default function TodoProvider({children}){
    const[isModalopen,setIsModalOpen]=useState(false);
    const [filter,setFilter]=useState(filterValues.all);
    const [alert,setAlert]=useState({});
    const [todoTasks,setTodoTasks]=useState([]);
    const [isEditing,setIsEditing]=useState(false);
    const [editId,setEditId]=useState(null);
    const [editText,setEditText]=useState("");
    const [deleteId,setDeleteId]=useState();

    //show alert method
    const showAlert=(show=false,message="",type="")=>{
        setAlert({show,message,type})
    }

    const filterTodoTasks=()=>{
        return todoTasks.filter((todo)=>{
            if(filter===filterValues.all){
                return todo;
            }
            else if(filter===filterValues.completed){
                return todo.completed;
            }
            else if(filter===filterValues.uncompleted){
                return !todo.completed;
            }
        })
    }
    const completeHandler=(id)=>{
        setTodoTasks( todoTasks.map((todo)=>{
            if(todo.id===id){
                return {...todo,completed:true};
            }
            return todo;
        }));
    }
    const deleteHandler=(id)=>{
        setTodoTasks(todoTasks.filter((todo)=>{
            if(todo.id!==id){
                return todo;
            };
        }))
    }
    const removeTodoTasks=()=>{
        setTodoTasks([]);
    } 
    return(
        <TodoContext.Provider value={{filter,setFilter,alert,setAlert,showAlert,todoTasks,setTodoTasks,removeTodoTasks,deleteHandler,completeHandler,filterTodoTasks,isModalopen,setIsModalOpen,setIsEditing,isEditing,editId,setEditId,editText,setEditText,deleteId,setDeleteId}}>
            {children}
        </TodoContext.Provider>
    )
}