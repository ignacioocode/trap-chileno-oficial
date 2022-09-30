import { useState } from 'react';
import './App.css';
import Main from './components/main/Main';
import VideoItem from './components/main/videoItem/VideoItem';
import Header from './components/header/Header';
import NavBar from './components/header/navBar/NavBar';
import Footer from './components/footer/Footer';

function App() {

  const [videos, setVideos] = useState([])

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5bed8123b6mshc71cdc90e35d373p19901ajsn90efd959e669',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  (async ()=> {
    try{
      const res = await fetch('https://youtube-v31.p.rapidapi.com/search?channelId=UCx8iZCG6XS61MFAC1hggfJg&part=snippet%2Cid&order=date&maxResults=25', options)
      const data = await res.json()
      // console.log(data.items)
      setVideos(data.items)
    }catch(e){
      console.log('A ocurrido un error en el try')
    }
  })()

  return (
    <>
      <Header>
        <NavBar/>
      </Header>
      <Main>
        {videos.map((item, i) => (
          <VideoItem 
            key={i}
            url={item.snippet.thumbnails.high.url}
            title={item.snippet.title}
            id={item.id.videoId}
            channel={item.snippet.channelId}
          />
        ))}
      </Main>
      <Footer/>
    </>
  );
}

export default App;
