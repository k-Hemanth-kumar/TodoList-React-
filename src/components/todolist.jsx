import { useContext } from "react"
import { TodoContext } from "../context/todoContext"
import { BsCheckAll, BsPencilSquare, BsTrash } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { CgEnter } from "react-icons/cg";

export default function TodoList({filterTodos,editHandler}){
    console.log(filterTodos,3)
    const {completeHandler,deleteHandler,removeTodoTasks,isModalopen,setIsModalOpen,deleteId,setDeleteId,showAlert}=useContext(TodoContext);
    return(
        <div className="todo-table-wrapper">
            <table className="todolist-table">
                <thead className="todo-table-header">
                    <tr>
                        <th>#</th>
                        <th>Task Name</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    filterTodos.length>0 &&(
                        <tbody>
                            {filterTodos.map((todo,index)=>{
                                return(
                                    <tr key={index+1}>
                                        <td>{todo.id}.</td>
                                        <td width={'100%'}><p className={`todo-td todo-${todo.completed?"completed":""}`}> {todo.title} </p></td>
                                        <td><p className={`todo-date`}> {formattedDate(todo.createdAt)} </p> </td>
                                        <td> 
                                            <span className={`status ${todo.completed?'completed':"active"}`}>{todo.completed?"Completed":"Active"} </span> 
                                        </td>
                                        <td>
                                            <div className="todo-action">
                                                <button title="Complete" type="button" className={`todo-btn todo-action-btn todo-complete-btn ${todo.completed?'todo-task-completed':""}`}
                                                onClick={()=>{
                                                    completeHandler(todo.id);
                                                    showAlert(true,"Task Completed Successfully!","complete")
                                                }} disabled={todo.completed?true:false
                                                } >
                                                    {todo.completed?<BsCheckAll/>:<AiOutlineCheck/>}
                                                </button>
                                                <button title="Edit" type="button" className={`todo-btn todo-action-btn todo-edit-btn`}
                                                onClick={()=>
                                                editHandler(todo)}>
                                                    {<BsPencilSquare/>}
                                                </button>
                                                <button title="Delted" type="button" className={`todo-btn todo-action-btn todo-delete-btn`}
                                                onClick={()=>{
                                                    setIsModalOpen(true);
                                                    setDeleteId(todo.id);
                                                    }}>
                                                    {<BsTrash/>}
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    )
                }
                {
                    filterTodos.length>1 &&(
                        <tfoot className="todo-footer">
                            <tr>
                                <td colSpan={5} style={{textAlign:"center"}}>
                                    <button className="todo-btn todo-deleteall-btn" type="button" onClick={()=>{
                                        setIsModalOpen(true);
                                    }}>
                                        Delete All
                                    </button>
                                </td>
                            </tr>
                        </tfoot>
                    )
                }
            </table>
            {!filterTodos.length&& <p className="todo-empty">No Items Found</p>}
        </div>
    )
};
function formattedDate(oldDate){
    const date=new Date(oldDate).toLocaleDateString();
    return date;
}