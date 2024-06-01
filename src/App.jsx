import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './CSS/App.css';
import './CSS/intro.css';
import './CSS/kart.css';
import './CSS/checkout.css';
import './CSS/finalizado.css';

import Intro from "./NovaVersao/intro.jsx";
import Kart from "./NovaVersao/kart.jsx";
import Checkout from "./NovaVersao/checkout.jsx";
import Finalizado from "./NovaVersao/finalizado.jsx";



function App()
{
    return (
        <div>ola</div>


    )
//     <BrowserRouter>
//       <Routes>
//         <Route index element= {<Intro />}/>
//         <Route path = "kart" element= {<Kart />}/>
//         <Route path = "checkout" element= {<Checkout />}/>
//         <Route path = "endPurchase" element= {<Finalizado />}/>
//       </Routes>   
//     </BrowserRouter>
 // )
}
 
  


export default App