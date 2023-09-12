//import { useState } from 'react'
import './App.css'
import Navbar from "./components/navbar";
import Copyright from "./components/copyright";
//import StreamingPlatformsDisplay from "./components/StreamingPlatformsDisplay";
import MusicSection from './components/MusicSection';
import BioSection from './components/BioSection';
import ContactSection from './components/ContactSection';
import BannerImage from './components/TopBannerImage';

function App() {
  //const [count, setCount] = useState(0)

  return (
  <div className='MainView'>
    <Navbar></Navbar>
    <BannerImage></BannerImage>
    <MusicSection></MusicSection>
    <BioSection></BioSection>
    <ContactSection></ContactSection>
    <Copyright></Copyright>

  </div>
  )
}

export default App
