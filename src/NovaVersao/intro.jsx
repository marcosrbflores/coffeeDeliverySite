import { useState , createContext, useContext, useEffect} from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import DBCoffees from './DB/DBCoffees.jsx';
import { kartContext, kartAddContext} from '../App.jsx';

let localContext = createContext();


import './CSS/App.css'
import './CSS/intro.css'
import './CSS/kart.css'
import './CSS/checkout.css'
import './CSS/finalizado.css'
import Kart from './kart.jsx';



function addCompra(list)
{
  console.log('bronco');
  const kart = useContext(kartContext);
  console.log("bronco3");
  const KartAdicionar = useContext(kartAddContext);
 
 
  let count = list[1];
  let indkart;
  let isInkart = false;
  for (let index in kart)
  {
    if (kart[index].includes(list[0])){
      isInkart = true;
      indkart=index;
    }
  }
  if (!isInkart)
  {
    
    kart1.push(list);
    KartAdicionar(list)
    //setKart((prevKart)=>[...prevKart,list])
  }
  else{
    console.log("bronco2");
    KartAdicionar([list[0],indkart])
    kart[indkart][1] = list[1];
    
  }
  console.log("comprado!");
  console.log(list);
  console.log(count);
  console.log(kart)
  return (
    <></>
  )
  
}

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
  const location = useLocation();


  


    return (  
    <>
        <localContext.Provider value = {location}>
        <Intro />      
        <Menu   {...location.state}/>
        </localContext.Provider>
    </>
    )
}


function Menu()
{
  let local = useContext(localContext); 
  // const [arrayCards,setArray] = useState(DBCoffees.map(CoffeeCard));
  // console.log(local.state)

  if (local.state != undefined)
    {
      DBCoffees.push(local.state);
      local.state = undefined;
    }

   const arrayCards = DBCoffees.map(CoffeeCard);
  return (
    <>
    
    <div style={{width:"90vw"}}>
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
  const [contador, setContador] = useState(0)
  if (contador<0)
    {
     setContador((contador)=> 0);

    }

 return (
  
  <div className='CoffeeCard'>
      <div className='ImageNTags'>  
        <img src ={props.imagem} alt = "coffee" className='CoffeeImage'></img>
        <div className='CoffeeTagsParent'><div className='CoffeeTags'>{props.tags}</div></div>
      
        <h3 className='CoffeeName'>{props.nome}</h3>
        <div className='CoffeeDesc'>{props.desc}</div>
      </div>
      <div className='CoffeeComprar'>
        <div ><span style={{fontSize:"70%"}}>R$ </span>{props.preco}</div>
        <div className='h'>
          <div className='CoffeeContador'>
            <div className= "CoffeeContadorItem2"onClick={() => setContador((contador) => contador - 1)} >-</div>
            <div className= "CoffeeContadorItem">{contador}</div>
            <div  className= "CoffeeContadorItem2"onClick={() => setContador((contador) => contador + 1)}>+</div>
          </div>      
          <div className='CoffeeBotao' onClick={()=>(addCompra([props,contador]))}>
            <img src = "IconIntro1.svg" alt = "icon1" ></img>
          </div>
        </div>
 
      </div>
  </div>
)
}



export default Home