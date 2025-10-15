import { useState, useEffect } from "react";
import layingInGrass from "../assets/layingInGrass.jpg";
import SpiderSongCoverArt from "../assets/SpiderSongCover-3000x3000.png"
import ShowInfoDisplay from "./ShowInfoDisplay";

const BannerImage = ()=> {
    const [width, setWidth] = useState(0);
    const handleResize = () => {
        if ( window.visualViewport.width < 560 ) {
            setWidth(window.visualViewport.width - 50);
        }
        else {
            setWidth(560);
        }
    }
    useEffect(() => {
        handleResize();
    }, []);

    return (

        <div className="BannerImage" style={{backgroundImage: "url(" + layingInGrass + ")", opacity:0.65}} id="Home">
            <h1 className="pageTitle"> Bobby Tarian</h1>
            <div className="coverArtContainer">
                <h2> <a href="https://distrokid.com/hyperfollow/bobbytarian/spider-song"  target="_blank" rel="noreferrer" >Spider Song - October 23rd </a></h2>
                <div className="coverArt" style={{backgroundImage: "url(" + SpiderSongCoverArt + ")", backgroundPosition: "center", backgroundSize:"cover"}}></div>
                </div>
                <br></br>
            {/* <section className="videoSection">
                
                
                <div className="youtubeVid">
                    <iframe width={width} height="315" src="https://www.youtube.com/embed/jdhxJ5taT9g?si=7_Bjiw1vFxd-qiNT"  title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    
                </div>
                
            </section> */}
            {/* <div className="headshotPhotoContainer">
                <img src={""+headshotImage} alt="" />
            </div> */}
            <section className="latestShowSection">
                {/* <ShowInfoDisplay location="Highlandia" date="June 14th, 2025" ticketLink="https://www.highlandiafest.com/"></ShowInfoDisplay> */}
            </section>
            {/* <div className="socialLinksContainer">
                <StreamingPlatformsDisplay></StreamingPlatformsDisplay>
            </div> */}
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1"></meta>
        </div>
    );
}
export default BannerImage;