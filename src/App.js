import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router'

function App() {

  return (
    <>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
