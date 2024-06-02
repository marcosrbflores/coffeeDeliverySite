import { useState } from 'react'
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



function App()
{  
  return (<div>ola</div>
    // <BrowserRouter>
    //   <Navbar />
    //   <Routes>
    //     <Route index element= {<Home />}/>
    //     <Route path = "kart" element= {<Kart />}/>
    //     <Route path = "checkout" element= {<Checkout />}/>
    //     <Route path = "endPurchase" element= {<Finalizado />}/>
    //     <Route path = "criar" element = {<Criar />} />
    //   </Routes>
    //   </BrowserRouter>
      )
}
 
  


export default App