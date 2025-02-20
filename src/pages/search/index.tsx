import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import moment from "moment";
import { Container, SearchContainer } from "./styles";
import SearchVideos from "../videosPage/searchVideos";
import { UserContext } from "../../contexts/contexts";


function SearchPage() {

  const {openMenu, search} = useContext(UserContext)
  
  interface Videos {
    id: {
      videoId: string;
    } 
    snippet: {
      title: string;
      thumbnails: {
        high: {
          url: string
        }
      }
      channelTitle: string;
      publishedAt: string;
      description: string;
    }
  }

  
  useEffect(() => {
    if (search !== '') {
      load()
    }
  }, [search])

  const [videos, setVideosapi] = useState<Videos[]>([]);
  const API_KEY = 'AIzaSyDQ0R9WayF_xxIn1l83heKzhmpkyVkXDfA'
  const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&maxResults=48&&key=${API_KEY}`
  async function load() {
    if (search !== '') {
      try {
        const resposta = await axios.get(URL)
        setVideosapi(resposta.data.items)
      } 
      catch(erro){
        console.log(erro)
      }
    }
  }

  function getPublishedTime(publishedAt: string) {
    const now = moment();
    const publishedTime = moment(publishedAt);
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


  return (
    <SearchContainer>
      <Container openMenu={openMenu}>
        {videos.map((video, index) => (
            <SearchVideos
            title={video.snippet.title} 
            thumbnail={video.snippet.thumbnails.high?.url} 
            channelImage={video.snippet.channelTitle.charAt(0).toUpperCase()} 
            channelName={video.snippet.channelTitle}
            details={`10 mi visualizações - ${getPublishedTime(video.snippet.publishedAt)}`}
            description={video.snippet.description} 
            key={index}
            />
          ))}
      </Container>
    </SearchContainer>
  )
}

export default SearchPage;