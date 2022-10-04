import VideoItem from '../components/main/videoItem/VideoItem';
import Main from '../components/main/Main'
import useApi from '../hooks/useApi';

const Inicio = () => {

  const [ videos] = useApi()
  

  
    return (
            <Main>
                {videos != null ? (videos.map((item, i) => (
                <VideoItem 
                    key={i}
                    url={item.snippet.thumbnails.high.url}
                    title={item.snippet.title}
                    id={item.id.videoId}
                    channel={item.snippet.channelId}
                />
                ))) : ('A ocurrido un error')}
            </Main>
    )
}

export default Inicio