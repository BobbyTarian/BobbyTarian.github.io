// import StreamingPlatformsDisplay from "./StreamingPlatformsDisplay";

const musicSection = () => {

    return (
        <section className="musicSection" id="Music">
            
            {/* <StreamingPlatformsDisplay></StreamingPlatformsDisplay> */}
            <div className="musicPlayerContainer" >
                <p>Bobby&#39;s 2020 EP <em>Moon Remains Seasons Change</em></p>
            <iframe style={{border: 0, width: "90%", height: "621px",  margin:"auto", display:"block"}} src="https://bandcamp.com/EmbeddedPlayer/album=1909035226/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="https://bobbytarian.bandcamp.com/album/moon-remains-seasons-change">Moon Remains, Seasons Change by Bobby Tarian</a></iframe>
            {/* <p>Bobby is a singer-songerwriter from Edmonton, Canada.
            Bobby released his EP<em> Moon Remains Seasons Change</em> at the end of 2020.
            you can catch him performing at various open mics in Edmonton.
            Currently, Bobby is working on a new album.</p> */}
            </div>
            <iframe style={{border: 0, width: "80%", height: "120px;", margin:"auto", display:"block", padding:"1em"}} src="https://bandcamp.com/EmbeddedPlayer/track=2935040232/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://bobbytarian.bandcamp.com/track/here-for-you">Here For You by Bobby Tarian</a></iframe>
            
        </section>
    );
}

export default musicSection;