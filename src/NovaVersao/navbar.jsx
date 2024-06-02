import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import './CSS/App.css'
import './CSS/intro.css'
import './CSS/kart.css'
import './CSS/checkout.css'
import './CSS/finalizado.css'


function Navbar(){  
    return ( 
    <div style = {{width:'80%', display: 'flex',flexDirection:'row',}}>
    <div className='navbar'>
      <Link to ="/">
        <img src="Logo.svg" alt ="logo" ></img>
      </Link>
      <div className='acoes'>
        <div className='local'><img src="Icon.svg" alt = "local" className='localIcon'/>São José dos Campos, SP</div>
        <div>
          
          <Link to="kart"><img src = "Cart.svg" alt = "cart" className='botao'></img></Link>
        </div>
        <Link to = "criar"><img src = "Create.svg" alt = "criar" className='botao'/></Link>
        
      </div>
    </div>
    </div>
  )}


  export default Navbar