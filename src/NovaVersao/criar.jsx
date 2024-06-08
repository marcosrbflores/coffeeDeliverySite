
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/criar.css"
import DBCoffees from "./DB/DBCoffees";
const cafe = {};

function Dash({cafe, mudarCafe})
{
    const HandleClickplus = ()=>
        {
            setIndex((index)=>(index+1));
            mudarCafe({...cafe, imagem:DBCoffees[index].imagem})
        }
        const HandleClickminus = ()=>
            {
                if (index>0)
                    setIndex((index)=>(index-1));
                mudarCafe({...cafe, imagem:DBCoffees[index].imagem})
            }
    const [index, setIndex] = useState(0);

   

    console.log(DBCoffees[index].imagem)

    const strToArray = (value) => (value.split(','));
    
    const navigate = useNavigate();
    return (
        


    <div style={{fontFamily:"Roboto", color:'#403937'}}>
        <div>Escolha um ícone para seu Produto</div>
        <div style = {{display:'flex', flexDirection:'row', justifyContent:'space-between', margin:" 5vh 0"}}>
            <div style = {{display:'flex', flexDirection:'row',alignItems:'center'}}>
                <div style = {{backgroundColor:'#F3F2F2', display:'flex', flexDirection:'row',alignItems:'center'}}>
                <img src = "IconLeft.svg" onClick={HandleClickminus} />
                    <img src = {DBCoffees[index].imagem }></img>
                    
                </div>
                <div style = {{backgroundColor:'#574F4D', display:'flex', flexDirection:'row',alignItems:'center'}}>
                    <img src = {DBCoffees[index+1].imagem} ></img>
                    <img src = "IconRight.svg" onClick={HandleClickplus} />
                </div>
            </div>
            <img src="_Fab_.svg" onClick={()=>navigate("/", {state:{...cafe}})}/>
        </div>
        <div className="creator">
            <div style = {{display:'flex', flexDirection:'row',alignItems:'flex-start   '}}>
                <img src="IconCoffee.svg" style={{marginRight:'1vh'}}/>
                <div>
                    <div>Novo tipo de café</div>
                    <div>Informe as caracteristicas do novo café que será exibido na loja</div>
                </div>
            </div>
            <div>
                <div style = {{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <div style={{width:'25%'}} > <input className="InputCoffee" type = "text" placeholder = "Nome" onChange={(e)=>mudarCafe({...cafe, nome:e.target.value})}/> </div>
                    <div style={{width:'73%'}}><input className="InputCoffee" type = "text" placeholder = "Estado de entrega" onChange={(e)=>mudarCafe({...cafe, estado:e.target.value})}/> </div>
                </div>
                <div><input className="InputCoffee" type = "text" placeholder = "Descrição" onChange={(e)=>mudarCafe({...cafe, desc:e.target.value})}/> </div>
                <div style = {{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <div style={{width:'25%'}}><input className="InputCoffee" type = "text" placeholder = "Preço" onChange={(e)=>mudarCafe({...cafe, preco:e.target.value})}/> </div>
                    <div style={{width:'73%'}}><input className="InputCoffee" type = "text" placeholder = "Tags" onChange={(e)=>mudarCafe({...cafe, tags:strToArray(e.target.value)})} /> </div>
                </div>
            </div>  
        </div>
    </div>)
}






function Criar()
{
    const [coffee, setCoffee] = useState({nome:'',imagem:'',desc:'',preco:'',tags:'',estado:''});
    return (<>
        <div style = {{width:'80%',height:'90%', padding:"0 10% 10%"}}><Dash cafe={{...coffee}} mudarCafe={(props)=>setCoffee(props)} /></div>
        </>
    )
}


export default Criar