import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Shorts from "./pages/menu-page/shorts";
import Inscricoes from "./pages/menu-page/inscrições";
import SeuCanal from "./pages/menu-page/seu-canal";
import Historico from "./pages/menu-page/historico";
import EmAlta from "./pages/menu-page/em-alta";
import Shopping from "./pages/menu-page/Shopping";
import Musicas from "./pages/menu-page/Musica";
import Filmes from "./pages/menu-page/Filmes";
import AoVivo from "./pages/menu-page/ao-vivo";
import Jogos from "./pages/menu-page/Jogos";
import Noticias from "./pages/menu-page/noticias";
import Esportes from "./pages/menu-page/esportes";
import Cursos from "./pages/menu-page/Cursos";
import Podcasts from "./pages/menu-page/Podcasts";
import Configuracoes from "./pages/menu-page/configurações";
import HistoricoDenuncias from "./pages/menu-page/historico -denuncias";
import Ajuda from "./pages/menu-page/ajuda";
import Feedback from "./pages/menu-page/feedback";
import YourVideos from "./pages/videosPage/seus-videos";
import SeusDownloads from "./pages/menu-page/seus-downloads";
import SearchPage from "./pages/search";
import Login from "./pages/users/login";
import CreateUserPage from "./pages/users/createUser";
import MyVideo from "./pages/videosPage/seus-videos";







function MinhasRotas(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/Shorts' element={<Shorts />} />
            <Route path='/Inscricoes' element={<Inscricoes />} />
            <Route path='/SeuCanal' element={<SeuCanal />} />
            <Route path='/Historico' element={<Historico />} />
            <Route path='/EmAlta' element={<EmAlta />} />
            <Route path='/Shopping' element={<Shopping />} />
            <Route path='/Musica' element={<Musicas />} />
            <Route path='/Filmes' element={<Filmes />} />
            <Route path='/AoVivo' element={<AoVivo />} />
            <Route path='/Jogos' element={<Jogos />} />
            <Route path='/Noticias' element={<Noticias />} />
            <Route path='/Esportes' element={<Esportes />} />
            <Route path='/Cursos' element={<Cursos />} />
            <Route path='/Podcasts' element={<Podcasts />} />
            <Route path='/Configurações' element={<Configuracoes />} />
            <Route path='/HistoricoDenuncias' element={<HistoricoDenuncias />} />
            <Route path='/Ajuda' element={<Ajuda />} />
            <Route path='/EviarFeedback' element={<Feedback />} />
            <Route path='/seusDownloads' element={<SeusDownloads />} />
            <Route path='/myVideos' element={<MyVideo />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/user' element={<CreateUserPage />} />



        </Routes>
    )
}

export default MinhasRotas