import { UserContext } from "../../../contexts/contexts";
import { ChannelImage, ImageBanner, TextCard, TextContainer, Title, TitleContainer, VideosContainer, VideosContent } from "./styles";
import { useContext } from "react";

interface Props {
    title: string
    thumbnail: string
    channelImage: string
    channelName: string
    details: string
}

function VideoComponent (props : Props){
    const {openMenu} = useContext(UserContext)

    return(
        <VideosContainer>
            <VideosContent openMenu={openMenu} >

                <ImageBanner openMenu={openMenu} alt="thumbnail" src={props.thumbnail} />

                <TitleContainer openMenu={openMenu} >

                    <ChannelImage>
                        {props.channelImage}
                    </ChannelImage>

                    <TextContainer>
                        <Title>{props.title}</Title>
                        <TextCard>{props.channelName}</TextCard>
                        <TextCard>{props.details}</TextCard>
                    </TextContainer>

                </TitleContainer>

            </VideosContent>

        </VideosContainer>
        
    )
}

export default VideoComponent;