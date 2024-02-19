import Navbar from "./components/Navbar"
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react"
function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const handleAdd=()=>{
    setTodos([...todos,{id:uuidv4(), todo , isCompleted:false}])
    setTodo("")
  }
  const handleEdit=(e,id )=>{
    let t=todos.filter(i=>i.id===id)
    setTodo(t[0].todo) 
    let newTodos=todos.filter(item=>{
      return item.id!==id 
     });
     setTodos(newTodos)  
     
  }
  const handleDelete=(e,id)=>{
     let newTodos=todos.filter(item=>{
      return item.id!==id 
     });
     setTodos(newTodos) 
  }
  const handleChange=(e)=>{
    setTodo(e.target.value)
  }
  const handleCheckbox=(e) => {
     let id=e.target.name;
     let index=todos.findIndex(item=>{
      return item.id===id;
     })
     let newTodos=[...todos];
     newTodos[index].isCompleted=!newTodos[index].isCompleted
     setTodos(newTodos)
  }
  
  return (
    <>
    <Navbar/>
    <div className="container my-5 mx-auto rounded-xl p-5 bg-black text-white min-h-[83vh]">
      <div className="addTodo">
        <h2 className="text-lg">Add todo</h2>
        <input onChange={handleChange} value={todo } className="text-black" type="text" />
        <button onClick={handleAdd} className="hover:font-bold text-md bg-white text-black mx-1 p-3 py-1 rounded-md hover:text-bold">Save</button>
      </div>
      <h2 className="text-lg my-5">Your Todos</h2> 
      <div className="todos">
        {todos.length===0 && <div className="m-5">No todos</div>}
        {todos.map(item=>{
      return  <div key={item.id} className="todo flex w-72 justify-between my-2">
        <div className="flex gap-5">
        <input onChange={handleCheckbox } type="checkbox" name={item.id} value={item.isCompleted} id="" />
        <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
        </div>
        <div className="buttons">
          <button onClick={(e)=>{handleEdit(e,item.id)}} className="text-sm bg-white text-black mx-1 p-3 py-1 rounded-md hover:font-bold text-md">Edit</button>
          <button onClick={(e)=>{handleDelete(e,item.id)}} className="text-sm bg-white text-black mx-1 p-3 py-1 rounded-md hover:font-bold text-md">Delete</button> 
        </div>
      </div>
      })}
      </div>
    </div>
    </>
  )
}

export default App
