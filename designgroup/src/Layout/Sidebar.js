import React from 'react';
import '../Sidebar.css'
import { bubble as Menu } from 'react-burger-menu';
 const  Slidebar=() => {  

  return (window.location.pathname=== "/Interior")?
  (
    <Menu >
    <a className="menu-item" href="/">
   Home
    </a>
    <a className="menu-item" href="Design">
      Design
     
    </a>
    <a className="menu-item" href="/Projects">
      Projects
    </a>
    
    <a className="menu-item" href="/About">
      About US
    </a>
  </Menu>
  ):(window.location.pathname === "/Exterior")?(
    <Menu isOpen={ true }>
      <a className="menu-item" href="/">
     Home
      </a>
      <a href="/"><u>Exterior: </u></a>
      <a className="menu-item" href="/Architecture" >
        Architecture
   
      </a>
      <a className="menu-item" href="/Landscaping">
        Landscaping
      </a>
      <a href="/"><u>see also: </u></a>
      <a className="menu-item" href="/Projects">
      Projects
    </a>
    <a className="menu-item" href="/About">
      About US
    </a>
    </Menu>
  ):(window.location.pathname==="/Design")?
  (   <Menu isOpen={ true }>
    <a className="menu-item" href="/">
   Home
    </a>
    <a className="menu-item" href="/">
      Design
      <ul>
        <li>   <a className="menu-item" href="/Interior">Interior</a></li>
        <li>   <a className="menu-item" href="/Exterior">Exterior</a></li>
      </ul>
    </a>
    <a className="menu-item" href="/Projects">
      Projects
    </a>
    <a className="menu-item" href="/desserts">
      About US
    </a>
  </Menu>):(window.location.pathname === "/Projects")?
  (
   <Menu >
     <a className="menu-item" href="/">
    Home
     </a>
     <a className="menu-item" href="Design">
       Design
      
     </a>
  
     
     <a className="menu-item" href="/About">
       About US
     </a>
   </Menu>
 ):
  (
   <Menu >
     <a className="menu-item" href="/">
    Home
     </a>
     <a className="menu-item" href="Design">
       Design
      
     </a>
     <a className="menu-item" href="/Projects">
       Projects
     </a>
     
     <a className="menu-item" href="/About">
       About US
     </a>
   </Menu>
 )
  
};

export default Slidebar
 
