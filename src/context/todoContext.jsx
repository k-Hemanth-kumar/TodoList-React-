import { createContext, useState } from "react";
import filterValues from "../constants";

export const TodoContext=createContext();

export default function TodoProvider({children}){
    const [filter,setFilter]=useState(filterValues.all);
    return(
        <TodoContext.Provider value={{filter,setFilter}}>
            {children}
        </TodoContext.Provider>
    )
}