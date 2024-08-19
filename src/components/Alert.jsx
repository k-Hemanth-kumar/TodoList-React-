import { useEffect } from "react"

export default function Alert({type,message,removeAlert}){
    useEffect(()=>{
        const timeOut=setTimeout(()=>{
            removeAlert();
        },3000);
        return ()=>clearTimeout(timeOut);
    },[])
    return(
        <div className="todolist-alert">
            <p className={`todolist-alert todolist-alert-${type}`}>
                {message}
            </p>
        </div>
    )
}