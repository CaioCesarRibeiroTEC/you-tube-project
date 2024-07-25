import { useContext } from "react";
import {  MeuCanalContainer, MeuCanalContent } from "./styles";
import { UserContext } from "../../../contexts/contexts";
import { useNavigate } from "react-router-dom";


function SeuCanal() {
    const navigate = useNavigate()
    const {login, user, openDropDown, setOpenDropDown} = useContext(UserContext)
    
    var CloseOpenDropDown = openDropDown;
    CloseOpenDropDown = false;


    return(
        <div>
            {login? 
                <MeuCanalContainer style={{display: 'block'}} onClick={() => setOpenDropDown(CloseOpenDropDown)}>
                    <div><b style={{fontSize:'30px'}}>{user.nome}</b></div>
                    <MeuCanalContent>                       
                        <div><b style={{fontSize:'30px'}}>Pagina em desenvolvimento</b></div>
                    </MeuCanalContent>
                    <button style={{height: '50px'}} onClick={() => navigate('/myVideos')}>Meus videos</button>
                </MeuCanalContainer>
            :
                <div style={{marginTop:'80px'}}>
                    <span><b>Faça o login para ter acesso ao seu canal</b></span>
                </div> 
                  
            }
       </div>
    )
}

export default SeuCanal;