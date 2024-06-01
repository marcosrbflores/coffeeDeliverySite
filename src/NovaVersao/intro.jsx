import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./navbar.jsx"


import './CSS/App.css'
import './CSS/intro.css'
import './CSS/kart.css'
import './CSS/checkout.css'
import './CSS/finalizado.css'



const cafe1 = {nome : "cafe1", imagem: "cafe1.svg", desc:"cafeDesc", preco:"cafepreco", tags:"cafetags" }
const cafe2 = {nome : "cafe2", imagem: "cafeImagem", desc:"cafeDesc", preco:"cafepreco", tags:"cafetags" }
const cafe3 = {nome : "cafe3", imagem: "cafeImagem", desc:"cafeDesc", preco:"cafepreco", tags:"cafetags" }
const cafe4 = {nome : "cafe4", imagem: "cafeImagem", desc:"cafeDesc", preco:"cafepreco", tags:"cafetags" }   
const arrayCafes = [cafe1,cafe2,cafe3,cafe4]

// function Navbar(){  
//   return ( 
//   <div>
//   <div className='navbar'>
//     <Link to ="/">
//       <img src="Logo.svg" alt ="logo" ></img>
//     </Link>
//     <div className='acoes'>
//       <div className='local'><img src="Icon.svg" alt = "local" className='localIcon'/>São José dos Campos, SP</div>
//       <div>
        
//         <Link to="kart"><img src = "Cart.svg" alt = "cart" className='botao'></img></Link>
//       </div>
//       <Link to = "criar"><img src = "Create.svg" alt = "criar" className='botao'/></Link>
      
//     </div>
//   </div>
//   </div>
// )}


function Intro()
{
  return(
    <div className='Intro'>
      <div className='IntroText1'>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>Com o coffee delivery, você recebe o seu café onde estiver, a qualquer hora</p>
        <div className='IntroText2'>
          <div className='IntroTextChild'>
            <img src = "IconIntro1.svg" alt = "icon1" className='IntroFigura1'></img><p>Compra simples e segura</p>
          </div>
          <div className='IntroTextChild'>
            <img src = "IconIntro2.svg" alt = "icon2" className='IntroFigura2'></img><p>Embalagem mantém o café intacto</p></div>
          <div className='IntroTextChild'>
            <img src = "IconIntro3.svg" alt = "icon3" className='IntroFigura3'></img><p>Entrega rápida e rastreada</p></div>
          <div className='IntroTextChild'>
            <img src = "IconIntro4.svg" alt = "icon4" className='IntroFigura4'></img><p>O café chega fresquinho até você</p></div>
        </div>
      </div>
      <img src = "ImagemIntro.svg" alt = "Cafezao"></img>
    </div>
  )
}




function Home(){
    return (
    <>
       {/* <Navbar />     */}
        <Intro />      
        <Menu />
    </>
    )
}


function Menu(){
  const arrayCards = arrayCafes.map(CoffeeCard)
  return (
    <>
    
    <div style={{width:"80vw"}}>
      <h3>Nossos Cafés</h3>
      <div className='Menu'>
        {arrayCards}
      </div>      
    </div>
    </>
  )
}

function CoffeeCard(props)
{

 return (
  
  <div className='CoffeeCard'>
    <div className='ImageNTags'>  
    <img src ={props.imagem} alt = "{props.nome}" className='CoffeeImage'></img>
    <div className='CoffeeTags'>{props.tags}</div>
    </div>


    <h3>{props.nome}</h3>
    <div>{props.desc}</div>

    <div>
      
      
    <div>{props.preco}</div>
    <div>contador</div>
    <div>comprar</div>
    </div> 




</div>
)
}



export default Home