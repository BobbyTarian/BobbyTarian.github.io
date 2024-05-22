import { useState, useEffect } from "react";
import bannerImage from "../assets/bannerImage.jpg";
import headshotImage from "../assets/XPRO8190-cropped.jpg";
import StreamingPlatformsDisplay from "./StreamingPlatformsDisplay";

const BannerImage = ()=> {
    const [width, setWidth] = useState(0);

    useEffect(() => {
    const handleResize = () => {
      // Perform actions on scroll
      if ( window.innerWidth < 560 ) {
        setWidth(window.innerWidth - 50);
    }
    else {
        setWidth(560);
    }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return (
        <div className="BannerImage" style={{backgroundImage: "url(" + bannerImage + ")", opacity:0.65}} id="Home">
            <h1 className="pageTitle"> Bobby Tarian</h1>
            
            <section className="videoSection">
                <h2> Here For you lyric video</h2>
                <div className="youtubeVid">
                    <iframe width={width} height="315" src="https://www.youtube.com/embed/pX-PYqUUbJk?si=uokqmZ7aZv2c7kyA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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