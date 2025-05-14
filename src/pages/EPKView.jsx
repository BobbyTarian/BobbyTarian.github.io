import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/navbar";
import BioSection from "../components/BioSection";
import MusicSection from '../components/MusicSection';
import ContactSection from '../components/ContactSection.jsx'
import Copyright from "../components/copyright.jsx";
import ShowsSection from "../components/ShowsSection.jsx";
import LivePerformanceSection from "../components/LivePerformanceSection.jsx";
import AltYegMagazineReview from "../assets/altyegMagazineReview.png";

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
    const { pathname } = useLocation();
    useEffect(() => {
            document.documentElement.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant", // Optional if you want to skip the scrolling animation
            });
    }, [pathname])

    return (
    <div className="EPKRootDiv MainView">
        <Navbar></Navbar>
        <section className ="EPKMainSection" >
        <h1 className="pageTitle">Bobby Tarian</h1>
        <section className="ButtonSection">
        </section>
        <section className="photosSection">
<h2 className="sectionTitle"> dropbox link for photos</h2>
        <a href="https://www.dropbox.com/scl/fo/txayennwc1b6zpog9o0yg/AExkY8RD44ylOZWZlNTQXGg?rlkey=gp7yd9gasxhd0sdm7ixu50zlj&e=1&st=kdhzbpso&dl=0" target="_blank" rel="noreferrer" > CLICK HERE FOR THE DROPBOX FOLDER WITH DOWNLOADABLE PHOTOS</a>
        </section>
        <section className="videoSection">
            <h3> Videos</h3>
        <iframe style={{width:"100%", height:"25em", padding:"1em"}} src="https://www.youtube.com/embed/qM093Q7kxhQ?si=a6HtGwgBdsjB1xdb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe style={{width:"100%", height:"25em", padding:"1em"}} src="https://www.youtube.com/embed/LDSfZQIjV_k?si=_cR2-HcGFx10LdBX" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </section>

        <section className="MusicEPKSection">
            <MusicSection></MusicSection>
        </section>
        <br></br>
        <section className="MediaSection">
            <h3> Media Coverage</h3>
            <br></br>
            <p><i>Bobby Tarian fuses indie rock and bedroom pop into a dreamy landscape of introspective yearnings and deep thought self-evaluation.</i></p>
            <p> - Cups and Cakes podcast</p>
            <p><a href="https://www.cupsncakespod.com/news/2020/10/25/single-premiere-bobby-tarian-ghost" target='_blank' rel="noreferrer">https://www.cupsncakespod.com/news/2020/10/25/single-premiere-bobby-tarian-ghost</a></p>
            
            <hr></hr>
            <p>
                <h5> A Dream in Liminal Haze Review - Alt Yeg Magazine (2025)</h5>   
                <br></br>
                <p><i>
                    Bobby Tarian's <em> A Dream in Liminal Haze</em> is a mesmerizing journey through ethereal soundscapes, blending ambient textures with haunting dreamlike melodies.
                </i></p>
                <p> - Alternativejustin</p>
                <p>full review:</p>
                <img className="magazineReviewImage" src={""+AltYegMagazineReview} alt="" />
            </p>
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

    <LivePerformanceSection></LivePerformanceSection>

    <section className = "NoteablePerformances">
            <ShowsSection></ShowsSection>
    </section>


       
    <section className ="PhotosDownload"></section>
            
        </section>
        <ContactSection></ContactSection>
        <Copyright></Copyright>
    </div>
    );
}

export default EPKView;