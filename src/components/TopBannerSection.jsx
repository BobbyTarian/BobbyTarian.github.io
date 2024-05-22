import { useState, useEffect } from "react";
import bannerImage from "../assets/bannerImage.jpg";
import headshotImage from "../assets/XPRO8190-cropped.jpg";
import StreamingPlatformsDisplay from "./StreamingPlatformsDisplay";

const BannerImage = ()=> {
    const [width, setWidth] = useState(0);

    useEffect(() => {
    const handleResize = () => {
      // Perform actions on scroll
      if ( window.visualViewport.width < 560 ) {
        setWidth(window.visualViewport.width - 50);
    }
    else {
        setWidth(560);
    }
    };
    ['resize', 'load'].forEach( function(event){
        window.addEventListener(event, handleResize);
    });
    
  }, []);
    const videoSectionStyle = {
        width: width,
        height: 315
    };
    return (
        <div className="BannerImage" style={{backgroundImage: "url(" + bannerImage + ")", opacity:0.65}} id="Home">
            <h1 className="pageTitle"> Bobby Tarian</h1>
            
            <section className="videoSection" style={videoSectionStyle}>
                <h2> Here For you lyric video</h2>
                <div className="youtubeVid">
                    <iframe width={width} height="315" src="https://www.youtube.com/embed/pX-PYqUUbJk?si=uokqmZ7aZv2c7kyA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                
            </section>
            <div className="headshotPhotoContainer">
                <img src={""+headshotImage} alt="" />
            </div>
            <div className="socialLinksContainer">
                <StreamingPlatformsDisplay></StreamingPlatformsDisplay>
            </div>
        </div>
    );
}
export default BannerImage;