import { useContext, useRef, useState } from "react";
import { BsPencil } from "react-icons/bs"
import { TodoContext } from "../context/todoContext";
export default function AddTodo({isEditing,editId,editText}){
    //const [isEditing,setIsEditing]=useState(false);
    const [text,setText]=useState(editText);
    //const [editId,setEditId]=useState(null);
    const editRef=useRef();
    const {showAlert}=useContext(TodoContext)
    const sumbitHandler=(e)=>{
        e.preventDefault();
        if(!text){
            showAlert(true,'Field is required','danger')
        }
        
        setText("");
    }
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