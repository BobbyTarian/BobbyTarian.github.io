import StreamingPlatformsDisplay from "./StreamingPlatformsDisplay";

const musicSection = () => {

    return (
        <section className="musicSection" id="Music">
            <p>Bobby released his EP<em> Moon Remains Seasons Change</em> at the end of 2020.</p>
            <p>you can catch Bobby busking at various Farmers markets in Edmonton.</p>
            <StreamingPlatformsDisplay></StreamingPlatformsDisplay>
            <iframe width="50%" height="350" scrolling="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1161759502&color=%239b6e76&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            
        </section>
    );
}

export default musicSection;