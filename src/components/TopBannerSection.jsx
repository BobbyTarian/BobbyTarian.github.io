import { useState, useEffect } from "react";
import bannerImage from "../assets/bannerImage.jpg";
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
        <div className="BannerImage" style={{backgroundImage: "url(" + bannerImage + ")", opacity:0.65}} id="Home">
            <h1 className="pageTitle"> Bobby Tarian</h1>
            
            <section className="videoSection">
                <h2> <a href="https://www.youtube.com/watch?v=pX-PYqUUbJk" target="_blank" rel="noreferrer">Here For you lyric video </a></h2>
                <div className="youtubeVid">
                    <iframe width={width} height="315" src="https://www.youtube.com/embed/pX-PYqUUbJk?si=uokqmZ7aZv2c7kyA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                
            </section>
            <div className="headshotPhotoContainer">
                <img src={""+headshotImage} alt="" />
            </div>
            <section className="latestShowSection">
            </section>
            <div className="socialLinksContainer">
                <StreamingPlatformsDisplay></StreamingPlatformsDisplay>
            </div>
        </div>
    );
}
export default BannerImage;