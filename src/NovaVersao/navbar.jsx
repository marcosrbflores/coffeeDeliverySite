import { useState, useContext, useEffect } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { kartContext, kartAddContext } from '../App';



import './CSS/App.css'
import './CSS/intro.css'
import './CSS/kart.css'
import './CSS/checkout.css'
import './CSS/finalizado.css'


function Navbar(){  
  const kart = useContext(kartContext);
  console.log(kart);
  const [kartIndex, setIndex]= useState(()=><></>);

  function KartCheck(array)
  {
    const numeroInKart = array.length;
    console.log(array);
    console.log(kart);
      if (numeroInKart!=0)
        setIndex((numeroInKart)=><div className='numberInKart'>{numeroInKart}</div>);
  }
  
  useEffect(()=>KartCheck(kart),[kart.length]) 


    return ( 
    <div style = {{width:'80%', display: 'flex',flexDirection:'row',}}>
    <div className='navbar'>
      <Link to ="/" style={{height:'100%'}}>
        <img src="Logo.svg" alt ="logo" ></img>
      </Link >
      <div className='acoes'>
        <div className='local'><img src="Icon.svg" alt = "local" className='localIcon'/>São José dos Campos, SP</div>

        <div style={{display:'flex', flexWrap:'nowrap', flexDirection:'row-reverse', marginLeft:'2vh'}}>
          <kartIndex />
          <Link to="kart" style={{height:'100%'}}><img src = "Cart.svg" alt = "cart" className='botao'></img></Link>
        </div>

        <Link to = "criar" style={{height:'100%'}}><img src = "Create.svg" alt = "criar" className='botao'/></Link>
        
      </div>
    </div>
    </div>
  )}


  export default Navbar