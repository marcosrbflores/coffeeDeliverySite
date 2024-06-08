
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const cafe = {};

function Dash({cafe, mudarCafe})
{
    const navigate = useNavigate();
    return (
        


    <div>
        <div>Escolha um ícone para seu Produto</div>
        <div>
            <div>icone</div>
            <div onClick={()=>navigate("/", {state:{...cafe}})}>adicionar</div>
        </div>
        <div>
            <div>
                <div>imagem</div>
                <div>novo tipo de café</div>
                <div>Informe as caracteristicas do novo café que será exibido na loja</div>
            </div>
            <div>
                <div> <input type = "text" placeholder = "Nome" onChange={(e)=>mudarCafe({...cafe, nome:e.target.value})}/> </div>
                <div><input type = "text" placeholder = "Estado de entrega" onChange={(e)=>mudarCafe({...cafe, estado:e.target.value})}/> </div>
            </div>
            <div><input type = "text" placeholder = "Descrição" onChange={(e)=>mudarCafe({...cafe, desc:e.target.value})}/> </div>
            <div>
                <div><input type = "text" placeholder = "Preço" onChange={(e)=>mudarCafe({...cafe, preco:e.target.value})}/> </div>
                <div><input type = "text" placeholder = "Tags" onChange={(e)=>mudarCafe({...cafe, tags:e.target.value})}/> </div>
            </div>
        </div>
    </div>)
}






function Criar()
{
    const [coffee, setCoffee] = useState({nome:'',icon:'',desc:'',preco:'',tags:'',estado:''});
    return (<>
        <div><Dash cafe={{...coffee}} mudarCafe={(props)=>setCoffee(props)} /></div>
        <button onClick={console.log(coffee)}></button>
        </>
    )
}


export default Criar