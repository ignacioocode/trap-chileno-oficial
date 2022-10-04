import {useEffect, useState } from "react";
import {API_KEY} from '../secrets'

const useApi = () => {

  const [videos, setVideos] = useState(null)

  
  useEffect(() => {
    (async () => {
        const options = {
            headers: {
              'X-RapidAPI-Key': API_KEY,
              'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            }
          };
        
            try{
              const res = await fetch('https://youtube-v31.p.rapidapi.com/search?channelId=UCx8iZCG6XS61MFAC1hggfJg&part=snippet%2Cid&order=date&maxResults=25', options)
              const data = await res.json()
              setVideos(data.items)
            }catch(e){
              console.log('A ocurrido un error en el try')
            }
    })()
  },[])


    return[videos]
}

export default useApi 