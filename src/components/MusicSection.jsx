import StreamingPlatformsDisplay from "./StreamingPlatformsDisplay";

const musicSection = () => {

    return (
        <section className="musicSection" id="Music">
            <p>Bobby released his EP<em> Moon Remains Seasons Change</em> at the end of 2020.</p>
            <iframe width="60%" height="300" scrolling="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1161759502&color=%239b6e76&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            <StreamingPlatformsDisplay></StreamingPlatformsDisplay>
        </section>
    );
}

export default musicSection;