//import { useState } from 'react'
import './App.css'
import Navbar from "./components/navbar";
import Copyright from "./components/copyright";
//import StreamingPlatformsDisplay from "./components/StreamingPlatformsDisplay";
import MusicSection from './components/MusicSection';
import BioSection from './components/BioSection';
import ContactSection from './components/ContactSection';
import BannerImage from './components/TopBannerSection';

function App() {
  //const [count, setCount] = useState(0)

  return (
  <div className='MainView'>
    <Navbar></Navbar>
    <BannerImage></BannerImage>
    <BioSection></BioSection>
    <MusicSection></MusicSection>
    
    <ContactSection></ContactSection>
    <Copyright></Copyright>

  </div>
  )
}

export default App
