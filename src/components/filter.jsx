import { useContext } from "react"
import filterValues from "../constants"
import { TodoContext } from "../context/todoContext"
export default function Filter(){
    const {setFilter}=useContext(TodoContext)
    const handleFilterchange=(e)=>{
        setFilter(e.target.value);
    }
    return(
        <div className="todo-filter-area">
            <label htmlFor="filter">Filter:</label>
            <select name="filter" id="filter" className="todo-filter" onChange={handleFilterchange}>
                <option value={filterValues.all}>{filterValues.all}</option>
                <option value={filterValues.completed}>{filterValues.completed} </option>
                <option value={filterValues.uncompleted}>{filterValues.uncompleted} </option>
                <option value={filterValues.pending}>{filterValues.pending} </option>
            </select>
        </div>
    )
}