import { useContext, useEffect, useRef, useState } from "react";
import { CompareInputPassword, CreateFromContainer, CreateImgSpan, CreateInputContainer, CreateLabelContainer, CreateLoginButtos, CreateLoginContainer, CreateLoginContent, CreateLoginImg, CreateLoginImgContainer, Input, ViewPassword } from "./styles";
import LoginIcon from '../../../assets/header-icons/YouTube-Logo-removebg-preview.png'
import { UserContext } from "../../../contexts/contexts";


function CreateUserPage() {

  const {
    handleCreateUser, createUserPage, setCreateUserPage, 
    nameValid, setNameValid, emailValid, 
    setEmailValid, passwordValid, setPasswordValid, 
    formatEmail, setFormatEmail, comparePassword, setComparePassword,
    samePassword, setSamePassword, showPassword, setShowPassword
  } = useContext(UserContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const comparePasswordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (nameRef.current !== null) {
      nameRef.current.focus();
    }
  },[])

  const createUser = () => {
    
    if (name.trim() !== '') {
      setNameValid(true)
    }
    if (email.trim() !== '') {
      setEmailValid(true)
    }
    if (password.trim() !== '' && comparePassword.trim() !== '') {
      setPasswordValid(true)
    }
    if (name.trim() === '' && email.trim() === '' && password.trim() === '') {
      setNameValid(false)
      setEmailValid(false)
      setPasswordValid(false)
      if (nameRef.current) {
        nameRef.current.focus();
      }
    }
    else if (name.trim() === '') {
      setEmailValid(false)
      if (nameRef.current) {
        nameRef.current.focus();
      }
    }
    else if (email.trim() === '') {
      setEmailValid(false)
      setFormatEmail(true)
      if (emailRef.current) {
        emailRef.current.focus()
      } 
    }
    else if (!/\S+@\S+\.\S+/.test(email)) {
      setFormatEmail(false)
      setEmailValid(false)
      if (emailRef.current) {
        emailRef.current.focus()
      } 
    }
    else if (password.trim() === '' || password.length < 8) {
      setPasswordValid(false)
      if (passwordRef.current) {
        passwordRef.current.focus()
      }
    }
    else if (comparePassword.trim() === '') {
      setPasswordValid(false)
      if (comparePasswordRef.current) {
        comparePasswordRef.current.focus()
      }
    }
    else if (password !== comparePassword) {
      setPasswordValid(false)
      setSamePassword(false)
      if (comparePasswordRef.current) {
        comparePasswordRef.current.focus()
      }
    }
    else {
      handleCreateUser(name, email, password)
    }
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  return(
    <CreateLoginContainer> 
      <CreateLoginContent>

        <CreateLoginImgContainer>
          <CreateLoginImg src={LoginIcon} />
          <CreateImgSpan><b>Faça o seu cadastro</b></CreateImgSpan>
        </CreateLoginImgContainer>

        <CreateInputContainer>
          <CreateFromContainer>

            <CreateLabelContainer htmlFor="name" >
              <b className='b'>Coloque seu nome: </b>
              <Input 
                valid={nameValid} 
                id="name" 
                name="name" 
                placeholder={
                  nameValid? 
                    'Digite seu nome.' 
                  : 
                    'esse campo não pode ficar vazio.'
                } 
                type="text" 
                value={name}
                ref={nameRef}
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />
            </CreateLabelContainer>

            <CreateLabelContainer htmlFor="email" >
              <b className='b'>Coloque seu email: </b>
              <Input 
                valid={emailValid} 
                id="email" 
                name="email" 
                placeholder={
                  formatEmail? 
                    'Digite seu e-mail.' 
                  : 
                    'O formato desse e-mail é inválido. Digite um e-mail válido.'
                } 
                type="email" 
                value={email}
                ref={emailRef}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </CreateLabelContainer>
            

            <CreateLabelContainer htmlFor="password">
              <b className='b'>Coloque a sua senha: </b>
              <Input 
                valid={passwordValid} 
                id="password" 
                name="password" 
                placeholder={
                  passwordValid? 
                    'Digite sua senha.' 
                  : 
                    'Coloque uma senha de 8 caracteres ou mais.'
                } 
                type={showPassword? 'text' : 'password'} 
                value={password}
                ref={passwordRef}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                onKeyDown={(e) => {
                  if (e.key === " ") {
                    e.preventDefault();
                  }
                  if(e.key === 'Enter') {
                    createUser()
                  }
                }}
              />

              <CompareInputPassword
                valid={passwordValid}  
                type={showPassword? 'text' : 'password'} 
                placeholder={
                  samePassword?
                    'repita sua senha.'
                  :
                    'Senha inválida. Verifique se estão iguais.'
                }
                value={comparePassword}
                ref={comparePasswordRef}
                onChange={(e) => {
                  setComparePassword(e.target.value)
                }}
                onKeyDown={(e) => {
                  if (e.key === " ") {
                    e.preventDefault();
                  }
                  if(e.key === 'Enter') {
                    createUser()
                  }
                }}
              />    
            </CreateLabelContainer>

          </CreateFromContainer>

          <ViewPassword>
            <input type="checkbox" id="show-password" checked={showPassword} onChange={handleShowPassword}/>
            <label htmlFor="show-password">Mostrar senha</label>
          </ViewPassword>
            
          <CreateLoginButtos>

            <button  
              onClick={createUser}                 
              onKeyDown={(e) => {
                if(e.key === 'Enter') {
                    
                }
                if (e.key === " ") {
                  e.preventDefault();
                }
              }}
            >
              Criar Usuario
            </button>

            <button onClick={() => setCreateUserPage(!createUserPage)} >Voltar</button>       

          </CreateLoginButtos>

        </CreateInputContainer>
          
      
      </CreateLoginContent>           
    </CreateLoginContainer>
  )
}

export default CreateUserPage;