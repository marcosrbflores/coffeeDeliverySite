//import {DBKart} from './DB/DBKart';
import DBCoffees from './DB/DBCoffees';
import './CSS/intro.css';
import './CSS/kart.css';


const cafe1 = {nome : "Espresso Tradicional", imagem: "cafe1.svg", desc:"o tradicional café feito com água quente e grãos moídos", preco:"9.90", tags:["tradicional"] }
const cafe2 = {nome : "cafe2", imagem: "cafeImagem", desc:"cafeDesc", preco:"cafepreco", tags:"cafetags" }
DBKart = [cafe1,cafe2]
const Endereco = []

function InputEndereco()
{
  // return (
  //   <div>Complete seu pedido
  //     <div >
  //       <div className='AddressBlock'><div className='Addresstitulo'>Endereço de entrega</div>
  //       <div> <input className='InputEndereco' type = 'text' placeholder='CEP'/></div>
  //       <div> <input className='InputEndereco' type = 'text'/></div>
  //         <div style={{display:'flex', flexWrap:'wrap',justifyContent:'space-between'}}>
  //          <div> <input className='InputEndereco2' type = 'text'/></div>
  //           <div><input className='InputEndereco2' type = 'text'/></div>
  //           <div><input className='InputEndereco2' type = 'text'/></div>
  //           <div><input className='InputEndereco2' type = 'text'/></div>
  //           <div><input className='InputEndereco2' type = 'text'/></div>
  //           <div><input className='InputEndereco2' type = 'text'/></div>
  //         </div>
          
  //       </div>
  //       <div className='AddressBlock'><div className='Addresstitulo'>Forma de pagamento</div>
  //         <div style={{display:'flex', flexWrap:'wrap',justifyContent:'space-around'}}>
  //           <button className='botaoPagamento'>Crédito</button>
  //           <button className='botaoPagamento'>Débito</button>
  //           <button className='botaoPagamento'>Dinheiro</button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // )
  return (<div>endereco</div>)
}

function CoffeeInKart(props)
  {
    return (
    <div>      
      <div>
        {props.nome}
      </div>

      <div>
        {props.desc}
      </div>
    </div>
)
  }



function Carrinho()
{
//   return (
//   <div >Cafés selecionados
//     <div className='AddressBlock' style={{display:'flex', flexDirection:'column',alignItems:'center'  }}>
//       {/* <CoffeeInKart nome ="cafe1" desc="desc1" />
//       <CoffeeInKart nome ="cafe2" desc="desc2"/> */}
//     </div>
//     <div>
//         <div>itens</div>
//         <div>entrega</div>
//         <div>total</div>
//       </div>
//     </div>
// )
return (<div>carrinho</div>)
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