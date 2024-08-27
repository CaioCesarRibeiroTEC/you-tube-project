import { Banner, ChannelImage, Container, TextCard, TextContainer, Title, TitleContainer } from "./styles";

interface Props {
  title: string
  thumbnail: string
  channelImage: string
  details: string
  publishedAt: string
}

function MyVideosCards(props: Props) {

  return (
    <Container>
      <Banner alt="thumbnail" src={props.thumbnail}/>
      <TitleContainer>
        <ChannelImage>
          {props.channelImage}
        </ChannelImage>
        <TextContainer>
          <Title>{props.title}</Title>
          <TextCard>{props.details}</TextCard>
          <TextCard>{props.publishedAt}</TextCard>
        </TextContainer>
      </TitleContainer>
    </Container>
  )
}

export default MyVideosCards;