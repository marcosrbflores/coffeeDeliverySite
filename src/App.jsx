import { useState } from 'react'

import './CSS/App.css';
import './CSS/intro.css';
import './CSS/kart.css';
import './CSS/checkout.css';
import './CSS/finalizado.css';



const cafe1 = {nome : "cafe1", imagem: "cafeImagem", desc:"cafeDesc", preco:"cafepreco", tags:"cafetags" }
const cafe2 = {nome : "cafe2", imagem: "cafeImagem", desc:"cafeDesc", preco:"cafepreco", tags:"cafetags" }
const cafe3 = {nome : "cafe3", imagem: "cafeImagem", desc:"cafeDesc", preco:"cafepreco", tags:"cafetags" }
const cafe4 = {nome : "cafe4", imagem: "cafeImagem", desc:"cafeDesc", preco:"cafepreco", tags:"cafetags" }   
const arrayCafes = [cafe1,cafe2,cafe3,cafe4]

function Navbar(){  
  return ( 
  <div>
  <div className='navbar'>
      <img src="Logo.svg" alt ="logo" ></img>
    <div className='acoes'>
      <div className='local'><img src="Icon.svg" alt = "local" className='localIcon'/>São José dos Campos, SP</div>
      <img src = "Cart.svg" alt = "cart" className='botao'/>
      <img src = "Create.svg" alt = "criar" className='botao'/>
    </div>
  </div>
  </div>
)}




function Intro(){
  return (
    <>
   <div className='intro'>esta é a intro
   </div> 
    
    </>
  )
}


function Menu(){
  const arrayCards = arrayCafes.map(CoffeeCard)
  return (
    <>
    
    <div style={{width:"80vw"}}>
      <h3>Nossos Cafés</h3>
      <div className='menu'>
        {arrayCards}
      </div>      
    </div>
    </>
  )
}

function CoffeeCard(props)
{

 return (
<div className='card'>
  <div>{props.imagem}</div>
  <div>{props.tags}</div>
  <div>{props.nome}</div>
  <div>{props.desc}</div>
  <div>{props.preco}</div>
</div>
)
}


function Carrinho()
{
  return (
    <div >este é o carrinho</div>
  )

}

function InputEndereco()
{
  return (
    <div>aqui vai o endereço</div>
  )
}
function Checkout()
{
  return (
    <div>este é o checkout</div>
  )
}
function Finalizado()
{
  return (
    <div> compra finalizada</div>
  )
}


function App() 
{
  const [Pagina, setPagina] = useState(1);
  switch (Pagina)
  {
    case 0:
      return (
        <>
          <Navbar />          
          <Intro />
          <Menu />
          
        </>
      )
   
    case 1:
      return (
        <>
          <Navbar />
          <div style={{display:"flex",justifyContent:"space-between",flexDirection:"row"}}>
          <InputEndereco  />
          <Carrinho />
          </div>
          
        </>
      )
     
    case 2:
      return       (
        <>
          <Navbar />
          <Checkout />
        </>
      )

    case 3:
      return       (
        <>
          
          
          <Navbar />
          <Finalizado />
          
        </>
      )
  }
  

 
  
}

export default App