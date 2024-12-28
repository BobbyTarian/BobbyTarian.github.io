import { useState, useEffect } from "react";
import bannerImage from "../assets/bannerImage.jpg";
import layingInGrass from "../assets/layingInGrass.jpg";
import EveryWhereCoverArt from "../assets/EveryWhereCoverArt.png";
import headshotImage from "../assets/XPRO8190-cropped.jpg";
import StreamingPlatformsDisplay from "./StreamingPlatformsDisplay";

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
                <h2> <a href="https://distrokid.com/hyperfollow/bobbytarian/everywhere-2" target="_blank" rel="noreferrer">Everywhere out December 12th </a></h2>
                <div className="coverArt" style={{backgroundImage: "url(" + EveryWhereCoverArt + ")", backgroundPosition: "center", backgroundSize:"cover"}}></div>
                </div>
                <br></br>
            <section className="videoSection">
                
                
                <div className="youtubeVid">
                    <iframe width={width} height="315" src="https://www.youtube.com/embed/jdhxJ5taT9g?si=7_Bjiw1vFxd-qiNT"  title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    
                </div>
                
            </section>
            {/* <div className="headshotPhotoContainer">
                <img src={""+headshotImage} alt="" />
            </div> */}
            <section className="latestShowSection">
            </section>
            {/* <div className="socialLinksContainer">
                <StreamingPlatformsDisplay></StreamingPlatformsDisplay>
            </div> */}
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1"></meta>
        </div>
    );
}
export default BannerImage;