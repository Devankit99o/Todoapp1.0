import React from 'react'
import Todoitem from './Todoitem'

export default function Todos(props) {
  return (
    <div>
    
       
       { props.todos.length!==0 ?
       props.todos.map((todo)=>{
        return(

               <Todoitem todo={todo} key={todo.sno} ondelete={props.ondelete} ondone={props.ondone}/>
        )

         } ) :<h3 style={{textAlign:'center'}} >NO TODOS to display </h3> 
      }
   
  
    
    </div>
  )
}
