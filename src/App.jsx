import { useState, createContext } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './NovaVersao/CSS/App.css';
import './NovaVersao/CSS/intro.css';
import './NovaVersao/CSS/kart.css';
import './NovaVersao/CSS/checkout.css';
import './NovaVersao/CSS/finalizado.css';

import Home from "./NovaVersao/intro.jsx";
import Kart from "./NovaVersao/kart.jsx";
import Checkout from "./NovaVersao/checkout.jsx";
import Finalizado from "./NovaVersao/finalizado.jsx";
import Criar from "./NovaVersao/criar.jsx";
import Navbar from "./NovaVersao/navbar.jsx";
import Rodape from "./NovaVersao/rodape.jsx"


const kartContext = createContext();
const kartAddContext = createContext();
function App()
{  
  const [kart, setKart]=useState([]);
  function KartAdd([item, number])
  { 
    setKart((pKart)=>([...pKart,[item,number]]));
  }
  return (
    <kartContext.Provider value ={[...kart]}>
      <kartAddContext.Provider value ={KartAdd}>

    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route index element= {<Home />}/>
        <Route path = "kart" element= {<Kart />}/>
        <Route path = "checkout" element= {<Checkout />}/>
        <Route path = "endPurchase" element= {<Finalizado />}/>
        <Route path = "criar" element = {<Criar />} />
      </Routes>
      
      <Rodape/>
      </BrowserRouter>
      </kartAddContext.Provider>
      </kartContext.Provider>
      )
}
 
  
export {kartContext}
export {kartAddContext}

export default App