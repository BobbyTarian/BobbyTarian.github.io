import StreamingPlatformsDisplay from "./StreamingPlatformsDisplay";

const musicSection = () => {

    return (
        <section className="musicSection" id="Music">
            
            <StreamingPlatformsDisplay></StreamingPlatformsDisplay>
            
            <br></br>

            <p>A Dream in Liminal Haze <em> March 28th, 2025</em></p>
            <iframe style={{border: 0, width: "80%", height: "120px;", margin:"auto", display:"block", padding:"1em"}} src="https://bandcamp.com/EmbeddedPlayer/track=4072734428/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://bobbytarian.bandcamp.com/track/a-dream-in-liminal-haze">A Dream in Liminal Haze by Bobby Tarian</a></iframe>

             <p>Everywhere <em>December 12th, 2024</em></p>
            <iframe style={{border: 0, width: "80%", height: "120px;", margin:"auto", display:"block", padding:"1em"}}  src="https://bandcamp.com/EmbeddedPlayer/track=1123946542/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://bobbytarian.bandcamp.com/track/everywhere">Everywhere by Bobby Tarian</a></iframe>
            <p>Here For You <em>March 9th, 2024</em></p>
            <iframe style={{border: 0, width: "80%", height: "120px;", margin:"auto", display:"block", padding:"1em"}} src="https://bandcamp.com/EmbeddedPlayer/track=2935040232/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://bobbytarian.bandcamp.com/track/here-for-you">Here For You by Bobby Tarian</a></iframe>
            
            <div className="musicPlayerContainer" >
                <p>Bobby&#39;s 2020 EP <em>Moon Remains Seasons Change</em></p>
            <iframe style={{border: 0, width: "90%", height: "621px",  margin:"auto", display:"block"}} src="https://bandcamp.com/EmbeddedPlayer/album=1909035226/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="https://bobbytarian.bandcamp.com/album/moon-remains-seasons-change">Moon Remains, Seasons Change by Bobby Tarian</a></iframe>
            
            
            </div>
            
            
        </section>
    );
}

export default musicSection;