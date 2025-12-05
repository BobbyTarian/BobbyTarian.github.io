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
            setWidth(580);
        }
    }
    useEffect(() => {
        handleResize();
    }, []);

    return (

        <div className="BannerImage" style={{backgroundImage: "url(" + layingInGrass + ")", opacity:0.88}} id="Home">
            <h1 className="pageTitle"> Bobby Tarian</h1>
            <div className="coverArtContainer">
                <h2> <a href="https://distrokid.com/hyperfollow/bobbytarian/spider-song"  target="_blank" rel="noreferrer" >Spider Song - October 23rd </a></h2>
                </div>
                <br></br>
            <section className="videoSection">
                
                
                <div className="youtubeVid">
                    <iframe width={width} height="315" src="https://www.youtube.com/embed/vNKESUJ41oU?si=SiQHXXWXRxRjkVbM"   title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    
                </div>
                
                
            </section>
            {/* <div className="headshotPhotoContainer">
                <img src={""+headshotImage} alt="" />
            </div> */}
            <section className="newsletterContainer">
                
                
                <script async src="https://subscribe-forms.beehiiv.com/embed.js"></script>
                <iframe src="https://subscribe-forms.beehiiv.com/def56aa7-e7b6-482b-af38-7e0c20d09c1d" className="beehiiv-embed" data-test-id="beehiiv-embed" frameBorder="0" scrolling="no" style={{width:"100%", height: "353px", margin:"0", borderRadius:"0px 0px 0px 0px", backgroundColor:"transparent" , boxShadow:"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)", maxWidth: "100%"}}></iframe>
                 
                
            </section>
            
            {/* <div className="socialLinksContainer">
                <StreamingPlatformsDisplay></StreamingPlatformsDisplay>
            </div> */}
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1"></meta>
        </div>
    );
}
export default BannerImage;