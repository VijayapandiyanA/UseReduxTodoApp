import { useDispatch } from "react-redux";
import { setFilter } from "../features/todos/todoSlice";

export default function Filter(){

 const dispatch = useDispatch()

 return(

 <div className="filters">

  <button onClick={()=>dispatch(setFilter("all"))}>
   All
  </button>

  <button onClick={()=>dispatch(setFilter("completed"))}>
   Completed
  </button>

  <button onClick={()=>dispatch(setFilter("pending"))}>
   Pending
  </button>

 </div>

 )
}