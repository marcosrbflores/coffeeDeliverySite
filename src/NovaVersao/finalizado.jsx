import Kart from "./kart"
import { useLocation } from "react-router-dom"


const FormasdePagamento = ["Cartão de Crédito",  "Cartão de Débito", "Dinheiro"];




function Finalizado()
{ const location = useLocation()
  console.log(location);
  console.log(location.state)
  const Address = {...location.state}
  console.log(FormasdePagamento[Address.pag]);
  console.log(Address.pag);
  
  return (
    <div style={{ height:'70vh',display:'flex', flexDirection:'row-reverse', justifyContent:'space-between' }}>
      <img src="Illustration.svg" alt = "illustration"/>
      <div  className = "mensagemBlock"style={{display:'flex', flexDirection:'column', justifyContent:'flex-start'}}>
        <div className="mensagem1">
          <h2 className="uhu">Uhu! Pedido confirmado</h2>
          <div className="agora">Agora é só aguardar que logo o café chegará até você</div>
        </div>
        <div className="addrBlock">
          <div className="horiz">
            <div>
              <img src = "IconLocalFinal.svg" class="localFinal"/>
            </div>
            <div>
            Entrega em {" "}<span style={{fontWeight:'bold'}}> {Address.Rua}, {Address.Num}</span>
            <div>{Address.Bairro} - {Address.Cid}, {Address.UF}</div>
            </div>
          </div>
          
          
          
            <div className="horiz"> 
              <img src = "IconIntro2.svg" class="tempoFinal"/>
              <div>
              Previsão de entrega<br/>
              <div style={{fontWeight:'bold'}}>20-30 min</div>
              </div>
              </div>
          
          
            <div className="horiz">
              <img src = "IconPaymentFinal.svg" class="PaymentFinal"/>
              <div>
            <div>Pagamento na entrega</div>
            <div>
            <span style={{fontWeight:'bold'}}>{FormasdePagamento[Address.pag-1]}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Finalizado