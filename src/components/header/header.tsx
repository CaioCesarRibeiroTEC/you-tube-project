import {  BackButton, BCharAt, BUserName, ButtonContainer, ButtonContent, ButtonIcon, ButtonLogar, ButtonLogarContainer, ClearButton, CloseImg, DropDowButton, DropDowButtonContainer, DropDowContainer, DropDowContent, HeaderButtons, HeaderContainer, LogoContainer, LogOutButton, LogOutContainer, SearchButton,  SearchContainerResponsive,  SearchContainer, SearchInput, SearchInputContainer, UserButtonContainer, UserButtonContent, UserContainer, UserName, ButtonContainerResponsive, LogoImg, DropUserButtonContent, DropBCharAt, DropBUserName, ButtonIconResponsive, IconResponsiveContainer } from './styles'
import MenuIcon from '../../assets/header-icons/menu-hamburger.png'
import LogoIcon from '../../assets/header-icons/YouTube-Logo.png'
import LupaIcon from '../../assets/header-icons/search.png'
import MicroIcon from '../../assets/header-icons/microfone-gravador.png'
import VideoIcon from '../../assets/header-icons/video.png'
import CloseIcon from '../../assets/header-icons/close.png'
import NotificationIcon from '../../assets/header-icons/sino.png'
import voltarIcon from '../../assets/header-icons/voltar.png'
import { useContext, useRef, useState } from "react";
import { UserContext } from "../../contexts/contexts";
import { useNavigate } from 'react-router-dom'







function Header() {
    const navigate = useNavigate()
    const { openMenu, setOpenMenu, login, user, logOut,loginPage, setLoginLoginPage, openDropDown, setOpenDropDown, setSearch } = useContext(UserContext);

    const [openSearch, setOpenSearch] = useState(false);

    var CloseOpenDropDown = openDropDown;
    CloseOpenDropDown = false;
    
    const [clearButton, setClearButton] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null);
 

    const Search = () => {
        setOpenSearch(true)
        if (inputRef.current) {
          inputRef.current.focus()
        }
    }
   
    
    function handleInput(inputValue: string) {
        setInputValue(inputValue)
        if (inputValue === '') {
          setClearButton(false)
        } else (
          setClearButton(true)
        )
    }

    const clearInput = () => {
        setInputValue('')
        setClearButton(false)
        if (inputRef.current) {
          inputRef.current.focus();
        }
    }


    return (   

        

        <HeaderContainer>

            <LogoContainer onClick={() => setOpenDropDown(CloseOpenDropDown)}>
                <ButtonContainer onClick={() => setOpenMenu(!openMenu) } margin="0 10px 0 0">
                    <ButtonContent >
                        <ButtonIcon alt="" src={MenuIcon}/>
                    </ButtonContent>
                </ButtonContainer>

                <LogoImg 
                alt=""
                src={LogoIcon}
                onClick={() => navigate('/')}
                />

            </LogoContainer>

            <SearchContainerResponsive onClick={Search}>
                <IconResponsiveContainer >
                    <ButtonIconResponsive alt="ícone lupa" src={LupaIcon} />
                </IconResponsiveContainer>
               
                <ButtonContainerResponsive openDropDown={openDropDown}>
                    <ButtonContent>
                        <ButtonIcon alt="" src={VideoIcon}/>
                    </ButtonContent>
                </ButtonContainerResponsive>

                <ButtonContainerResponsive openDropDown={openDropDown} >
                    <ButtonContent>
                        <ButtonIcon alt="" src={NotificationIcon}/>
                    </ButtonContent>
                </ButtonContainerResponsive>

            </SearchContainerResponsive>
     
            <SearchContainer openSearch={openSearch} onClick={() => setOpenDropDown(CloseOpenDropDown)}>
                
                <BackButton openSearch={openSearch} onClick={() => setOpenSearch(false)}>
                    <img alt="Botão voltar" src={voltarIcon} style={{ width: '20px' }} />
                </BackButton>

                <SearchInputContainer>
                    <SearchInput 
                        ref={inputRef}
                        value={inputValue}
                        placeholder="Pesquisar"
                        onChange={(e) => {
                        handleInput(e.target.value)
                        }}
                        onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            setSearch(inputValue)
                            navigate('/search')
                        }
                        }}
                    />

                    <ClearButton
                        clearButton={clearButton}
                        onClick={clearInput}
                    >

                    <CloseImg src={CloseIcon} />

                    </ClearButton>
                
                </SearchInputContainer>

                <SearchButton
                    onClick={() => {
                    if (inputValue.trim() === '') {
                        alert('Faça sua pesquisar')
                        return;
                    }
                    setSearch(inputValue)
                    navigate('/search')
                    }}
                >
                    <ButtonIcon alt="" src={LupaIcon} />
                </SearchButton>

                <ButtonContainer margin="0 0 0 10px">
                    <ButtonContent>
                        <ButtonIcon alt="" src={MicroIcon}/>
                    </ButtonContent>
                </ButtonContainer>
            </SearchContainer>
            
            
            <HeaderButtons onClick={() => setOpenDropDown(CloseOpenDropDown)}>
                <ButtonContainer margin="0 0 0 10px">
                    <ButtonContent>
                        <ButtonIcon alt="" src={VideoIcon}/>
                    </ButtonContent>
                </ButtonContainer>
                <ButtonContainer margin="0 0 0 10px">
                    <ButtonContent>
                        <ButtonIcon alt="" src={NotificationIcon}/>
                    </ButtonContent>
                </ButtonContainer>
            </HeaderButtons> 
            

            <UserContainer>
                {
                    login?
                        <>
                            <UserName openDropDown={openDropDown}>
                                <UserButtonContainer openDropDown={openDropDown} > 

                                    <UserButtonContent openDropDown={openDropDown} onClick={() => setOpenDropDown(!openDropDown)}>
                                        <BCharAt  openDropDown={openDropDown}>
                                            {user && user.nome ? user.nome.charAt(0).toUpperCase() : ''}
                                        </BCharAt> 
                                        <BUserName openDropDown={openDropDown}>
                                            {user.nome}
                                        </BUserName>                          
                                    </UserButtonContent>

                                </UserButtonContainer>   
                            </UserName>
                                    
                            <DropDowContainer openDropDown={openDropDown}>
                                <DropDowContent>

                                    <DropUserButtonContent openDropDown={openDropDown} onClick={() => setOpenDropDown(!openDropDown)}>
                                        <DropBCharAt  openDropDown={openDropDown}>
                                            {user && user.nome ? user.nome.charAt(0).toUpperCase() : ''}
                                        </DropBCharAt> 
                                        <DropBUserName openDropDown={openDropDown}>
                                            {user.nome}
                                        </DropBUserName>                          
                                    </DropUserButtonContent>

                                    <DropDowButtonContainer onClick={() => setOpenDropDown(CloseOpenDropDown)}>

                                        <DropDowButton onClick={() => navigate('/SeuCanal')}>               
                                            Meu canal                          
                                        </DropDowButton> 

                                        <DropDowButton onClick={() => navigate('/myVideos')}>               
                                            Meus videos                          
                                        </DropDowButton> 

                                    </DropDowButtonContainer>

                                    <LogOutContainer>
                                        <LogOutButton onClick={() => logOut()}>Sair</LogOutButton>
                                    </LogOutContainer>

                                </DropDowContent>

                            </DropDowContainer>
                        </>
                                
                            
                                        
                        
                    :
                        <ButtonLogarContainer>
                            <ButtonLogar onClick={() => setLoginLoginPage(!loginPage)}>
                                Faça seu login
                            </ButtonLogar>
                        </ButtonLogarContainer>
                                                
                }
                                    
            </UserContainer>
        </HeaderContainer>
    )
}

export default Header;