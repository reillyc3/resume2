import React from 'react'
import Link from 'gatsby-link';
import styled from 'styled-components';




const Menu = () => (
    <div style={{
        background: '#1F2833',
        paddingTop: '10',
      
    }}>
      
    <ul className ='menuList' style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly',
        marginBottom: '0px'
       
       

    }}>
      
        <li id='home'><Link to="/">Home</Link></li>   
        <li id='projects'><Link to="/projects">Projects</Link></li> 
        <li id='resume'><Link to="/resume">Resume</Link></li> 
        <li id='contact'><Link to="/contact">Contact</Link></li>
       
    </ul>
    </div>
  )

export default Menu;