import { createContext, useState } from "react";
import filterValues from "../constants";

export const TodoContext=createContext();

export default function TodoProvider({children}){
    const [filter,setFilter]=useState(filterValues.all);
    const [alert,setAlert]=useState({});

    //show alert method
    const showAlert=(show=false,message="",type="")=>{
        setAlert({show,message,type})
    }
    return(
        <TodoContext.Provider value={{filter,setFilter,alert,setAlert,showAlert}}>
            {children}
        </TodoContext.Provider>
    )
}