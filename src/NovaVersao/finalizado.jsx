import Kart from "./kart"
import { useLocation } from "react-router-dom"


const FormasdePagamento = ["Cartão de Crédito",  "Cartão de Débito", "Dinheiro"];
let Address = {};



function Finalizado()
{
  console.log(FormasdePagamento[Address.pag]);
  console.log(Address.pag);
  Address = {...useLocation().state}
  return (
    <div style={{display:'flex', flexDirection:'row-reverse'}}>
      <img src="Illustration.svg" alt = "illustration"/>
      <div  style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
        <div>
          <div>uhu pedido confirmado</div>
          <div>agora é só aguardar que o café logo chegará até você</div>
        </div>
        <div>
          <div>Entrega em {Address.Rua}, {Address.Num}<br/>{Address.bairro} - {Address.Cid}, {Address.UF} </div>
          <div>Previsao de entrega<br/> 20-30 min</div>
          <div>Pagamento na entrega<br/>{FormasdePagamento[Address.pag-1]} </div>
        </div>
      </div>
    </div>
  )
}
export default Finalizado