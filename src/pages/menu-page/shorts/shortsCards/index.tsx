import { CardVideo, DetailsShortVideo, ThumbnailShortVideo, TitleShortVideo } from './stylesCard'

interface Props {
  title: string
  thumbnail: string
  details: string
}

function CardShorts(props: Props) {
  return (
    <CardVideo to={'/shorts'}>
      <ThumbnailShortVideo alt='Thumbnail' src={props.thumbnail}/>
      <TitleShortVideo>{props.title}</TitleShortVideo>
      <DetailsShortVideo>{props.details}</DetailsShortVideo>
    </CardVideo>
  )
}

export default CardShorts;