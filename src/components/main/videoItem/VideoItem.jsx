import './VideoItem.css'

const VideoItem = ({url, title, id, channel}) => {
    return (
        <article>
            <div>
            <a 
                    href={`https://www.youtube.com/watch?v=${id}`}
                    target={'_BLANK'}
                    rel={'noreferrer'}
                ><img src={url} alt="imagen del video" />
                </a>
            </div>
            <h5><a 
                    href={`https://www.youtube.com/watch?v=${id}`}
                    target={'_BLANK'}
                    rel={'noreferrer'}
                >{title}
                </a>
            </h5>
            <p><a 
                    href={`https://www.youtube.com/channel/${channel}`} 
                    target={'_Blank'} 
                    rel={'noreferrer'}
                >TrapChileno
                </a>
            </p>
        </article>
    )
}

export default VideoItem