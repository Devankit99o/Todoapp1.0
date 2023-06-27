import React from 'react'

export default function Todoitem({todo,ondelete,ondone}) {
  return (
    <div className='container'>
    <h5>{todo.title}</h5>
    <p className='p1'>{todo.desc}</p>
  
    <button className='btn1 '  onClick={()=>{ondone(todo)}}>DONE</button>
    <button  className='btn2'   onClick={()=>{ondelete(todo)}} >DELETE</button>
    

    </div>
  )
}
