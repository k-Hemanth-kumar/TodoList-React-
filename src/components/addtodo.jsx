import { useContext, useEffect, useRef, useState } from "react";
import { BsPencil } from "react-icons/bs"
import { TodoContext } from "../context/todoContext";
export default function AddTodo(){
    //console.log(isEditing,editText,editId)
    //const [isEditing,setIsEditing]=useState(false);
    const {showAlert,setAlert,todoTasks,setTodoTasks,isEditing,setIsEditing,editId,setEditId,editText,setEditText}=useContext(TodoContext);
    const [text,setText]=useState("");
    //const [editId,setEditId]=useState(null);
    const editRef=useRef();
    const sumbitHandler=(e)=>{
        e.preventDefault();
        if(!text){
            showAlert(true,'Field is required','danger')
        }
        else if(text && isEditing){
            const updatedItems=todoTasks.map((todo)=>{
                if(todo.id===editId){
                    return {
                       ...todo,
                       title:text,
                       createdAt:new Date(),
                    }
                }
                else{
                    return todo;
                }
            });
            setText("");
            setTodoTasks(updatedItems);
            setIsEditing(false);
            setEditId(null);
            setEditText(null);
            setAlert({show:true,message:"Updated Successfully!",type:"success"})
        }
        else{
            const todo={
                title: text,
                createdAt:new Date(),
                completed:false,
                id:todoTasks.length+1
            }
            setTodoTasks([...todoTasks,todo]);
            setText("");
            showAlert(true,"Added Successfully!","success");
        }
    }
    useEffect(()=>{
        if(editRef.current){
            //console.log(editRef.current.value);
            const end=editRef.current.value.length;
            editRef.current.setSelectionRange(end,end)
            editRef.current.focus();
            setText(editText);
        }
    },[isEditing])
    return(
        <form className="" onSubmit={sumbitHandler}>
            <div className="todo-form-group">
                <div>
                    <BsPencil fill="#fff"/>
                </div>
                <div className="todo-from-control">
                    <input type="text" className="todo-input-control"
                    placeholder="Enter Task" ref={editRef} value={text}
                    onChange={(e)=>setText(e.target.value)} />
                    <button className="todo-btn">
                        {isEditing?"Update":"Add Item"}
                    </button>
                </div>
            </div>
        </form>
    )
}