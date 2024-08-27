import { ButtonContainer, ButtonContent, ButtonIcon, ButtonLogin, DivisorItem, MenuContainer, MenuItem } from "./styles"
import HomeIcon  from "../../assets/menu-icons/home.png"
import Shorts from '../../assets/menu-icons/shorts.png'
import Inscricoes from '../../assets/menu-icons/inscrição.png'
import Voce from '../../assets/menu-icons/voce.png'
import Historico from '../../assets/menu-icons/historico.png'
import EmAlta from '../../assets/menu-icons/em-alta.png'
import Shopping from '../../assets/menu-icons/shopping.png'
import Musica from '../../assets/menu-icons/musica.png'
import Filmes from '../../assets/menu-icons/filme.png'
import AoVivo from '../../assets/menu-icons/ao-vivo.png'
import Jogos from '../../assets/menu-icons/jogos.png'
import Noticias from '../../assets/menu-icons/noticias.png'
import Esportes from '../../assets/menu-icons/esportes.png'
import Cursos from '../../assets/menu-icons/cursos.png'
import Podcasts from '../../assets/menu-icons/podcasts.png'
import ProcurarCanais from '../../assets/menu-icons/mais.png'
import YouTubePremium from '../../assets/menu-icons/YouTube.png'
import YouTubeMusic from '../../assets/menu-icons/YouTube-Music.png'
import YouTubeKids from '../../assets/menu-icons/YouTube-Kids.png'
import Configuracoes from '../../assets/menu-icons/configuração.png'
import HistoricoDenuncias from '../../assets/menu-icons/historico-de-denuncias.png'
import Ajuda from '../../assets/menu-icons/ajuda.png'
import EviarFeedback from '../../assets/menu-icons/feedback.png'
import IconeLogin from '../../assets/menu-icons/icone-login.png'
import downloadsIcons from '../../assets/menu-icons/download.png'
import seuCanal from '../../assets/menu-icons/seu-canal.png'
import seusVídeos from '../../assets/menu-icons/seus-videos.png'
import seusDownloads from '../../assets/menu-icons/seus-download.png'
import { useContext } from "react";
import { UserContext } from "../../contexts/contexts"
import { useNavigate } from "react-router-dom"




const bloco1 = [
    {name: 'Inicio', imagem: HomeIcon, link: '/',}, 
    {name: 'Shorts',imagem: Shorts, link: '/Shorts'}, 
    {name: 'Inscrições',imagem: Inscricoes, link: '/Inscricoes'}
]

const bloco2 = [
    {name: 'Você', imagem: Voce, link: '/SeuCanal'}, 
    {name: 'Histórico',imagem: Historico, link: '/Historico'}
]

const blocoLogado = [
    {name: 'Seu canal', imagem: seuCanal, link: '/seuCanal'}, 
    {name: 'Histórico',imagem: Historico, link: '/Historico'},
    {name: 'Seus vídeos',imagem: seusVídeos, link: '/myVideos'},
    {name: 'Seus downloads',imagem: seusDownloads, link: '/seusDownloads'}


]
 
const bloco3 = [
    {name: 'Em alta', imagem: EmAlta, link: '/EmAlta',}, 
    {name: 'Shopping',imagem: Shopping, link: '/Shopping'}, 
    {name: 'Musica',imagem: Musica, link: '/Musica'},
    {name: 'Filmes',imagem: Filmes, link: '/Filmes'},
    {name: 'Ao vivo',imagem: AoVivo, link: '/AoVivo'},
    {name: 'Jogos',imagem: Jogos, link: '/Jogos'},
    {name: 'Notícias',imagem: Noticias, link: '/Noticias'},
    {name: 'Esportes',imagem: Esportes, link: '/Esportes'},
    {name: 'Cursos',imagem: Cursos, link: '/Cursos'},
    {name: 'Podcasts',imagem: Podcasts, link: '/Podcasts'},
]

const bloco4 = [
    {name: 'Procurar canais', imagem: ProcurarCanais, link: '/ProcurarCanais'}
]

const bloco5 = [
    {name: 'YouTube Premium', imagem: YouTubePremium, link: '/YouTubePremium',}, 
    {name: 'YouTube Music',imagem: YouTubeMusic, link: '/YouTubeMusic'}, 
    {name: 'YouTube Kids',imagem: YouTubeKids, link: '/YouTubeKids'}
]

const bloco6 = [
    {name: 'Configurações', imagem: Configuracoes, link: '/Configurações'}, 
    {name: 'Historico de denuncias',imagem: HistoricoDenuncias, link: '/HistoricoDenuncias'}, 
    {name: 'Ajuda',imagem: Ajuda, link: '/Ajuda'},
    {name: 'Eviar feedback',imagem: EviarFeedback, link: '/EviarFeedback'}
]

const bloco7 = [
    {name: 'Inicio', imagem: HomeIcon, link: '/',}, 
    {name: 'Shorts',imagem: Shorts, link: '/Shorts'}, 
    {name: 'Inscrições',imagem: Inscricoes, link: '/Inscricoes'},
    {name: 'YouTube Music',imagem: YouTubeMusic, link: '/YouTubeMusic'},
    {name: 'Você', imagem: Voce, link: '/seuCanal'},
    {name: 'downloads', imagem: downloadsIcons, link: '/seusDownloads'},  
]

function Menu () {  
    const navigate = useNavigate();
    const {openMenu, login, openDropDown, setOpenDropDown, loginPage, setLoginLoginPage} = useContext(UserContext)
    
    var CloseOpenDropDown = openDropDown;
    CloseOpenDropDown = false;
    
    return(
        <MenuContainer onClick={() => setOpenDropDown(CloseOpenDropDown)} openMenu={openMenu}>

            {openMenu? 
                <>
                    <DivisorItem >{
                        bloco1.map((item) => (
                            <MenuItem openMenu={openMenu}>
                                <ButtonContainer onClick={() => navigate(item.link)}>
                                    <ButtonContent openMenu={openMenu}>
                                        <ButtonIcon openMenu={openMenu} alt="" src={item.imagem} />
                                        <span>{item.name}</span>
                                    </ButtonContent>
                                </ButtonContainer> 
                            </MenuItem>
                        ))
                    }</DivisorItem>

                    { login? null :
                        <DivisorItem>{
                        bloco2.map((item) => (
                            <MenuItem openMenu={openMenu}>
                                <ButtonContainer onClick={() => navigate(item.link)}>
                                    <ButtonContent openMenu={openMenu}>
                                        <ButtonIcon openMenu={openMenu} alt="" src={item.imagem} />
                                        <span>{item.name}</span>
                                    </ButtonContent>
                                </ButtonContainer> 
                            </MenuItem>
                        ))
                    }</DivisorItem>}

                    <DivisorItem>{
                        login?
                            <DivisorItem>{
                                blocoLogado.map((item) => (
                                    <MenuItem openMenu={openMenu}>
                                        <ButtonContainer onClick={() => navigate(item.link)}>
                                            <ButtonContent openMenu={openMenu}>
                                                <ButtonIcon openMenu={openMenu} alt="" src={item.imagem} />
                                                <span>{item.name}</span>
                                            </ButtonContent>
                                        </ButtonContainer> 
                                    </MenuItem>
                                ))
                            }</DivisorItem>
                        :<>
                            <span>Faça login para curtir vídeos, comentar e se inscrever.</span>
                            <div>
                                <ButtonLogin onClick={() => setLoginLoginPage(!loginPage)}>
                                    <img alt="" src={IconeLogin}/> 
                                    <p>Fazer Login</p>
                                </ButtonLogin>    
                            </div>
                        </>    
                    }</DivisorItem>

                    <DivisorItem>{
                        bloco3.map((item) => (
                            <MenuItem openMenu={openMenu}>
                                <ButtonContainer onClick={() => navigate(item.link)}>
                                    <ButtonContent openMenu={openMenu}>
                                        <ButtonIcon openMenu={openMenu} alt="" src={item.imagem} />
                                        <span>{item.name}</span>
                                    </ButtonContent>
                                </ButtonContainer> 
                            </MenuItem>
                        ))
                    }</DivisorItem>

                    <DivisorItem>{
                        bloco4.map((item) => (
                            <MenuItem openMenu={openMenu}>
                                <ButtonContainer onClick={() => navigate(item.link)}>
                                    <ButtonContent openMenu={openMenu}>
                                        <ButtonIcon openMenu={openMenu} alt="" src={item.imagem} />
                                        <span>{item.name}</span>
                                    </ButtonContent>
                                </ButtonContainer> 
                            </MenuItem>
                        ))
                    }</DivisorItem>

                    <DivisorItem>{
                        bloco5.map((item) => (
                            <MenuItem openMenu={openMenu}>
                                <ButtonContainer onClick={() => navigate(item.link)}>
                                    <ButtonContent openMenu={openMenu}>
                                        <ButtonIcon openMenu={openMenu} alt="" src={item.imagem} />
                                        <span>{item.name}</span>
                                    </ButtonContent>
                                </ButtonContainer> 
                            </MenuItem>
                        ))
                    }</DivisorItem>

                    <DivisorItem>{
                        bloco6.map((item) => (
                            <MenuItem openMenu={openMenu}>
                                <ButtonContainer onClick={() => navigate(item.link)}>
                                    <ButtonContent openMenu={openMenu}>
                                        <ButtonIcon openMenu={openMenu} alt="" src={item.imagem} />
                                        <span>{item.name}</span>
                                    </ButtonContent>
                                </ButtonContainer> 
                            </MenuItem>
                        ))
                    }</DivisorItem>
                </>
            
            : 
                <DivisorItem>{
                    bloco7.map((item) => (
                        <MenuItem openMenu={openMenu}>
                            <ButtonContainer onClick={() => navigate(item.link)} >
                                <ButtonContent openMenu={openMenu}>
                                    <ButtonIcon openMenu={openMenu} alt="" src={item.imagem} />
                                    <span>{item.name}</span>
                                </ButtonContent>
                            </ButtonContainer> 
                        </MenuItem>
                    ))
                }</DivisorItem> }    

        </MenuContainer>
    )
}

export default Menu;