import { useState } from "react";

import Navbar from "../components/navbar";
import BioSection from "../components/BioSection";
import MusicSection from '../components/MusicSection';
import ContactSection from '../components/ContactSection.jsx'
import Copyright from "../components/copyright.jsx";
const EPKView = ()=> {

    const [index, setIndex] = useState(0);

    const imageURLMap = new Map();

    const onClickBackArrow = () => {

        if ( index > 0 ){
            
            setIndex(index-1);
        }
        else {
            setIndex(imageURLMap.size -1 )
        }
        
    };

    const onClickForwardArrow = () => {

         if ( index < imageURLMap.size - 1 ){
            
            setIndex(index + 1);
        }
        else {
            setIndex(0);
        }
    };

    return (
    <div className="EPKRootDiv MainView">
        <Navbar></Navbar>
        <section className ="EPKMainSection" >
        <h1 className="pageTitle">Bobby Tarian</h1>
        <section className="photosSection">
<h2 className="sectionTitle"> dropbox link for photos</h2>
        <a href="https://www.dropbox.com/scl/fo/txayennwc1b6zpog9o0yg/AExkY8RD44ylOZWZlNTQXGg?rlkey=gp7yd9gasxhd0sdm7ixu50zlj&e=1&st=kdhzbpso&dl=0" target="_blank" rel="noreferrer" > CLICK HERE FOR THE DROPBOX FOLDER WITH DOWNLOADABLE PHOTOS</a>
        </section>

        <h2 className="sectionTitle"> Short Bio</h2>
        <BioSection></BioSection>
        <br></br>
        <section className="BioDownload"></section>

        {/* <h2 className="sectionTitle">Long Bio</h2>

        <section className="BioSection" id="Bio">
            <div className="BioText">
               This is still being worked on! sorry! 
            </div> 
    </section> */}

    <section className="BioDownload"></section>
        
    <section className = "NoteablePerformances">

    </section>

    <section className="MusicEPKSection">
        <MusicSection></MusicSection>
    </section>
       
    <section className ="PhotosDownload"></section>
            
        </section>
        <ContactSection></ContactSection>
        <Copyright></Copyright>
    </div>
    );
}

export default EPKView;