import { useContext, useState } from "react";
import LoginIcon from '../../../assets/header-icons/YouTube-Logo-removebg-preview.png'
import { FromContainer, ImgSpan, InputContainer, LabelContainer, LoginButtos, LoginContainer, LoginContent, LoginImg, LoginImgContainer, ViewPassword } from "./styles";
import CreateUserPage from "../createUser";
import { UserContext } from "../../../contexts/contexts";

function Login() {

    const {createUserPage, setCreateUserPage, showPassword, setShowPassword, handleLogin} = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return(

            <LoginContainer> 
                { createUserPage? 

                    <CreateUserPage />

                :    

                    <LoginContent>

                        <LoginImgContainer>
                            <LoginImg src={LoginIcon} />
                            <ImgSpan><b>Faça o seu login</b></ImgSpan>
                        </LoginImgContainer>

                        <InputContainer>
                            <FromContainer>

                                <LabelContainer htmlFor="email" >
                                    <b className='b'>Coloque seu email: </b>
                                    <input 
                                        id="email" 
                                        name="email" 
                                        placeholder="Coloque o seu email" 
                                        type="email" value={email} 
                                        onChange={(e) => setEmail(e.target.value)}/>
                                </LabelContainer>
                                

                                <LabelContainer htmlFor="password">
                                    <b className='b'>Coloque a sua senha: </b>
                                    <input  
                                        id="password" 
                                        name="password" 
                                        placeholder="password" 
                                        type={showPassword? 'text' : 'password'}  
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)}
                                    />    
                                </LabelContainer>

                            </FromContainer>

                            <ViewPassword>
                                <input type="checkbox" id="show-password" checked={showPassword} onChange={handleShowPassword}/>
                                <label htmlFor="show-password">Mostrar senha</label>
                            </ViewPassword>
                            
                            <LoginButtos>
                                <button 
                                    onClick={() => handleLogin(email, password)}
                                    onKeyDown={(e) => {
                                        if(e.key === 'Enter') {
                                            handleLogin()
                                        }
                                        if (e.key === " ") {
                                            e.preventDefault();
                                        }
                                    }}
                                >
                                    Logar
                                </button>
                                <button onClick={() => setCreateUserPage(!createUserPage)}>Criar usuário</button>                          
                            </LoginButtos>

                        </InputContainer>
                        
                    
                    </LoginContent>           
                }
            </LoginContainer>
    )
}

export default Login;