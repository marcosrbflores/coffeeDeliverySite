//import {DBKart} from './DB/DBKart';
import DBCoffees from './DB/DBCoffees';
import './CSS/intro.css';
import './CSS/kart.css';
import { Form, Link, Navigate, useActionData } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { kartContext } from '../App';


let Address = {CEP:'', Rua: '', Num:'',Comp:'',Bairro:'',Cid:'',UF:'', pag:0 };
function Apertar()
{
  console.log(pag);
  console.log(Address);
}


function InputEndereco()
{
  const [Pagamento, setPagamento] = useState(0);
  const [CEP, setCEP] = useState('');
  const [Rua, setRua] = useState('');
  const [Num, setNum] = useState('');
  const [Comp, setComp] = useState('');
  const [Bairro, setBairro] = useState('');
  const [Cid, setCid] = useState('');
  const [UF, setUF] = useState('');
  Address.CEP = CEP;
  Address.Rua = Rua;
  Address.Num = Num;
  Address.Comp = Comp;
  Address.Bairro = Bairro;
  Address.Cid = Cid;
  Address.UF = UF;
  Address.pag = Pagamento;
  

console.log(Address.pag)
  return (
    <div>Complete seu pedido
      <div >
        <div className='AddressBlock'><div className='Addresstitulo'>Endereço de entrega</div>
        <input className='InputEndereco' type = 'text' placeholder='CEP' value = {CEP} onChange={(e)=>setCEP(e.target.value)} />
        

        <div> <input className='InputEndereco' type = 'text' placeholder='Rua' value = {Rua} onChange={(e)=>setRua(e.target.value)}></input></div>

          <div style={{display:'flex', flexWrap:'wrap',justifyContent:'space-between'}}>
            <div style={{display:'flex', flexDirection:'row',justifyContent:'space-between', width:'100%'}}>
            <div style = {{width:'35%'}}><input className='InputEndereco' type = 'text' placeholder='Numero' value = {Num} onChange={(e)=>setNum(e.target.value)}/></div>
              <div style = {{width:'60%'}}><input className='InputEndereco' type = 'text' placeholder='Complemento' value = {Comp} onChange={(e)=>setComp(e.target.value)}/></div>
            </div>
            <div style={{display:'flex', flexDirection:'row',justifyContent:'space-between', width:'100%'}}>
              <div style = {{width:'35%'}}><input className='InputEndereco' type = 'text' placeholder='Bairro' value = {Bairro} onChange={(e)=>setBairro(e.target.value) }/></div>
              <div style = {{width:'48%'}}><input className='InputEndereco' type = 'text' placeholder='Cidade' value = {Cid} onChange={(e)=>setCid(e.target.value)}/></div>
              <div style = {{width:'7%'}}><input className='InputEndereco' type = 'text' placeholder='UF' value = {UF} onChange={(e)=>setUF(e.target.value) }/></div>
            </div>
          </div>
          
        </div>
        <div className='AddressBlock'><div className='Addresstitulo'>Forma de pagamento</div>
          <div style={{display:'flex', flexWrap:'wrap',justifyContent:'space-around'}}>
            <button type='checkbox' className='botaoPagamento' onClick={()=>setPagamento(1)}>Crédito</button>
            <button className='botaoPagamento' onClick={()=>setPagamento(2)}>Débito</button>
            <button className='botaoPagamento' onClick={()=>setPagamento(3)}>Dinheiro</button>
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
  DentroKart = useContext(kartContext)
  const navigate = useNavigate();
  const arrayKart = DentroKart.map(CoffeeInKart);



  const valorEntrega = 3.5;
  let soma = 0;
  for (let index in DentroKart)
    {
      soma += DentroKart[index][1] * DentroKart[index][0].preco;
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
      <button style={{backgroundColor:"#DBAC2C", color:"#fffff",borderRadius:'0'}} onClick={navigate("/endPurchase", {state : {...Address} })}><Link>CONFIRMAR PEDIDO</Link></button>
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