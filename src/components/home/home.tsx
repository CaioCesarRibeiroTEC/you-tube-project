import { HomeContainer, HomeContent } from "./styles";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { UserContext } from "../../contexts/contexts";
import { MenuPesquisa } from "../../pages/home-pages/menuDePesquisa";
import VideoComponent from "../../pages/videosPage/videoComponent";

function Home() {

  interface Videos {
      id: string;
      snippet: {
        title: string;
        thumbnails: {
          high: {
            url: string
          }
          maxres: {
            url: string;
          }
        }
        channelTitle: string;
        publishedAt: string;
      },
      statistics: {
        viewCount: string;
      }
  }


  const {openMenu, openDropDown, setOpenDropDown, categoryId} = useContext(UserContext)

  const [videos, setVideos] = useState<Videos[]>([]);

  var CloseOpenDropDown = openDropDown;
  CloseOpenDropDown = false;

  const API_KEY = 'AIzaSyDQ0R9WayF_xxIn1l83heKzhmpkyVkXDfA'
  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&hl=pt_BR&maxResults=48&regionCode=br&videoCategoryId=${categoryId}&key=${API_KEY}`


  useEffect(() => {
    load()
  }, [categoryId])

  async function load() {
    try {
      const resposta = await axios.get(url)
      setVideos(resposta.data.items)
      console.log(resposta.data.items)
    } catch (erro) {

      console.log(erro)
    }
  }
  
  function formatViewCount(views: number): string {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(0)} mi de visualizações`;
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(0)} mil visualizações`;
    } else {
      return `${views} visualizações`;
    }
  }


  function getPublishedTime(publishe: string) {
    const now = moment();
    const publishedTime = moment(publishe);
    const diffDays = now.diff(publishedTime, 'days');
      

    if (diffDays <= 0) {
      return 'hoje';
    } else if (diffDays === 1) {
      return 'há 1 dia';
    } else if (diffDays <= 7) {
      return `há ${diffDays} dias`;
    } else if (diffDays <= 30) {
      const diffWeeks = Math.floor(diffDays / 7);
      if (diffWeeks === 1) {
        return 'há 1 semana';
      } else {
        return `há ${diffWeeks} semanas`;
      }
    } else if (diffDays <= 365) {
      const diffMonths = Math.floor(diffDays / 30);
      if (diffMonths === 1) {
        return 'há 1 mês';
      } else {
        return `há ${diffMonths} meses`;
      }
    } else {
      const diffYears = Math.floor(diffDays / 365);
      if (diffYears === 1) {
        return 'há 1 ano';
      } else {
        return `há ${diffYears} anos`;
      }
    }
  }
  return(  
    <HomeContainer>


      <MenuPesquisa />


      <HomeContent onClick={() => setOpenDropDown(CloseOpenDropDown)} openMenu={openMenu}>

        {videos.map((video) => (
          <VideoComponent 
            title={video.snippet.title}
            thumbnail={video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.high?.url}
            channelImage={video.snippet.channelTitle.charAt(0).toUpperCase()}
            channelName={video.snippet.channelTitle}
            details={`${formatViewCount(Number(video.statistics.viewCount))} - ${getPublishedTime(video.snippet.publishedAt)}`}
            key={video.id}
          />
        ))}

      </HomeContent>

    </HomeContainer>
  )
}


export default Home;