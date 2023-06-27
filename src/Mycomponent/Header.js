import React from 'react'
import PropTypes from 'prop-types'
import {Link }  from 'react-router-dom'

export default function Header(props) {
  return (
    <div>
        <nav className='top'>
       <Link to='/' style={{textDecoration:'none',color:'black'}}  > <h3>{props.title}</h3> </Link>
        
            <ul>
       <Link to ='/' style={{textDecoration:'none',color:'black'}}>    {props.home? <li>HOME</li>:" "} </Link> 
        <Link to='/about'style={{textDecoration:'none',color:'black'}} >    <li>ABOUT</li> </Link>

            
          
            <input className='x' type="text" placeholder='   search..'/>
             {/* <button className='y'> SEARCH </button>  */}

            </ul>

            
        </nav>
    </div>
  )
}

Header.defaultProps={
  title:"this is my TODO list",
  home:false

}
Header.propTypes={
  title:PropTypes.string,
  home:PropTypes.bool.isRequired

}