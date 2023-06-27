import React from 'react'

export default function Footer() {
  let footerStyle={
    position:"sticky",
    bottom:"0%",
    width:"100%",
    height:"50px"
   
  

  }
  return (
    <footer className='ftr' style={footerStyle}>
   copyright &copy; MyTodoList.com

    </footer>
  )
}
