import StreamingPlatformsDisplay from "./StreamingPlatformsDisplay";

const musicSection = () => {

    return (
        <section className="musicSection" id="Music">
            <p>Bobby released his EP<em> Moon Remains Seasons Change</em> at the end of 2020.</p>
            <p>you can catch Bobby busking at various Farmers markets in Edmonton.</p>
            <StreamingPlatformsDisplay></StreamingPlatformsDisplay>
            <iframe src="https://bandcamp.com/EmbeddedPlayer/album=1909035226/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://bobbytarian.bandcamp.com/album/moon-remains-seasons-change">Moon Remains, Seasons Change by Bobby Tarian</a></iframe>
            
        </section>
    );
}

export default musicSection;