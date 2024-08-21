import { useContext } from "react";
import { TodoContext } from "../context/todoContext";
import { BsEar } from "react-icons/bs";

export default function Modal(){
    const {setIsModalOpen,deleteId,setDeleteId,deleteHandler,removeTodoTasks,showAlert}=useContext(TodoContext);
    console.log(deleteId);
    return(
        <div className="todolist-warning">
            <div className="todolist-modal-warning">
                <span>!</span>
                <h3>Confirm</h3>
                <p>Are you sure you want to permanently delete {deleteId?"this Task":"All"}</p>
                <div className="todo-action">
                    <button className="todo-btn todo-warning-btn yes" onClick={()=>{
                        deleteId?deleteHandler(deleteId):removeTodoTasks();
                        showAlert(true,"Deleted Successfully!","warning");
                        setDeleteId(null);
                        setIsModalOpen(false);
                    }}>
                        Yes, Delete
                    </button>
                    <button className="todo-btn todo-warning-btn cancel" onClick={()=>{
                        setDeleteId(null);
                        setIsModalOpen(false);
                    }}>
                        No, Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}