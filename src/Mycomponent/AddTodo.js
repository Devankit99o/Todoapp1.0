import React, { useState } from 'react'

export default function AddTodo(props) {
    const[title,setTitle]=useState("");
    const[desc,setDesc]=useState("");
   const submit=(e)=>{
    e.preventDefault();
    
    if(!title || !desc ){
        alert("title or desc can not be empty");
        
    }
    else{
        props.addTodo(title,desc);

        setTitle("")
       setDesc(''); }
                    
    }

  return (
    <div>

<form className='frm' onSubmit={submit}>
    
    <h3 id='addspace'>AddTodos</h3>
  <div >
    <label  >Title</label><br/> 
    <input type="text"  value={title} onChange={(e)=>{setTitle(e.target.value)}} className='in' />
   
  </div>
  <div>
    <label >Desc</label> <br/>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className='in' />
  </div>
  <button type="submit" className='sbt' >Submit</button>
</form>
     



    </div>
  )
}
