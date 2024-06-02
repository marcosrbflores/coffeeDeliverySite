//import {DBKart} from './DB/DBKart';
import DBCoffees from './DB/DBCoffees';
import './CSS/intro.css';
import './CSS/kart.css';
import { Link, useActionData } from 'react-router-dom';
import { useEffect, useState } from 'react';


const cafe1 = {nome : "Espresso Tradicional", imagem: "cafe1.svg", desc:"o tradicional café feito com água quente e grãos moídos", preco:9.90, tags:["tradicional"] }
const cafe2 = {nome : "cafe2", imagem: "cafeImagem", desc:"cafeDesc", preco:9.90, tags:"cafetags" }
const DentroKart = [[cafe1,2],[cafe2,1]]
const Endereco = {};

function InputEndereco()
{
  return (
    <div>Complete seu pedido
      <div >
        <div className='AddressBlock'><div className='Addresstitulo'>Endereço de entrega</div>
        <div> <input className='InputEndereco' type = 'text' placeholder='CEP'/></div>
        <div> <input className='InputEndereco' type = 'text'/></div>
          <div style={{display:'flex', flexWrap:'wrap',justifyContent:'space-between'}}>
           <div> <input className='InputEndereco2' type = 'text'/></div>
            <div><input className='InputEndereco2' type = 'text'/></div>
            <div><input className='InputEndereco2' type = 'text'/></div>
            <div><input className='InputEndereco2' type = 'text'/></div>
            <div><input className='InputEndereco2' type = 'text'/></div>
            <div><input className='InputEndereco2' type = 'text'/></div>
          </div>
          
        </div>
        <div className='AddressBlock'><div className='Addresstitulo'>Forma de pagamento</div>
          <div style={{display:'flex', flexWrap:'wrap',justifyContent:'space-around'}}>
            <button className='botaoPagamento'>Crédito</button>
            <button className='botaoPagamento'>Débito</button>
            <button className='botaoPagamento'>Dinheiro</button>
          </div>
        </div>
      </div>
    </div>
  )
  }

function CoffeeInKart(list)
  {
    const props = list[0];
    const [Contagem, setContagem] = useState(list[1])
    let precoUltimate="";
    function ContagemMinus()
    {
      setContagem(Contagem-1);
      list[1] = Contagem;
    }
    function ContagemPlus()
    {
      setContagem(Contagem+1);
      list[1] = Contagem;
    }



    if (Contagem<0)
      {
        setContagem((Contagem)=>(0))
      }

    const precoFinal = props.preco*Contagem
    if (precoFinal>=10){
      precoUltimate =precoFinal.toPrecision(4)
    }
    else if (precoFinal>=100){
      precoUltimate =precoFinal.toPrecision(5)
    }
    else{
      precoUltimate =precoFinal.toPrecision(3)
    }
    
    return (
    <div style={{display:'flex', flexDirection:'row',justifyContent:'space-between', width:"100%",alignItems:"center"  }}> 
      <img src = {props.imagem} alt=  "{props.nome}" style={{height:"50%"}}/>     
      <div style={{display:'flex', flexDirection:'column',justifyContent:'space-between',width:"30%", textAlign:'center'}}>
        {props.nome}
        <div style={{display:'flex', flexDirection:'row',justifyContent:'space-between'}}>
          <div style={{display:'flex', flexDirection:'row'}}>
            <div onClick={ContagemMinus} >-</div>
            <div>{Contagem}</div>
            <div onClick={ContagemPlus}>+</div>
          </div>
          <div>remover</div>
        </div>
      </div>
      <div style={{width:"15%", textAlign: "end"}}>{precoUltimate}</div>
    </div>
)
  }



function Carrinho()
{
  const arrayKart = DentroKart.map(CoffeeInKart);
  const valorEntrega = 3.5;
  let soma = 0;
  for (let index in DentroKart)
    {
      soma += DentroKart[index][1] * DentroKart[index][0].preco;
    }
  function Apertar()
  {
    console.log("apertou");
  }

  return (
  <div >Cafés selecionados
    <div className='AddressBlock' style={{display:'flex', flexDirection:'column',alignItems:'center'  }}>
      {arrayKart}
      <div style={{display:'flex', flexDirection:'column',alignItems:'center',width:'100%'}}>
        <div className='hBetween'><div>itens</div> <div>R${soma.toPrecision(4)}</div></div>
        <div className='hBetween'><div>entrega</div> <div>{"R$  "}{valorEntrega.toPrecision(3)}</div></div>
        <div className='hBetween'><div>total</div> <div>R${(soma+valorEntrega).toPrecision(4)}</div></div>
      </div>
      <button style={{backgroundColor:"#DBAC2C", color:"#fffff",borderRadius:'0'}} onClick={Apertar}><Link to="/endPurchase" >CONFIRMAR PEDIDO</Link></button>
    </div>
    
    </div>
)
}



function Kart()
{
  return (
    <div className='hAround'>
      <InputEndereco />
      <Carrinho />
      
    </div>
  )

}
export default Kart