import ButtonLink from "../components/ButtonLink";
import {
  SPOTIFY_URL, BANDCAMP_URL, FACEBOOK_URL, INSTAGRAM_URL, SOUNDCLOUD_URL, APPLE_MUSIC_URL, YOUTUBE_URL,
  LIMINAL_HAZE_APPLE_URL, LIMINAL_HAZE_SPOTIFY_URI,
  LIMINAL_HAZE_YOUTUBE_URL, LIMINAL_HAZE_YOUTUBE_MUSIC_URL, SPIDER_SONG_APPLE_URL, SPIDER_SONG_SPOTIFY_URL, SPIDER_SONG_YOUTUBE_URL
} from '../constants';
import { faSpotify, faYoutube, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faBandcamp } from '@fortawesome/free-brands-svg-icons';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faApple } from "@fortawesome/free-brands-svg-icons";
import layingInGrass from "../assets/layingInGrass.jpg";
import headShot from "../assets/headshot.jpg";
import sunsetNature from "../assets/sunsetNature.jpg";
import ADreamInLiminalHazeCOVERART from "../assets/ADreamInLiminalHaze-COVER-ART.png";
import SpiderSongCover from "../assets/SpiderSongCover-3000x3000.png";

import MetaPixel from "../utils/metaPixel";

const LinkView = () => {
  return (<div className="sunsetNatureBackground "  style={{backgroundImage: "url(" + sunsetNature + ")", backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover", height:"100vh"}}  >
    <MetaPixel></MetaPixel>
    <section className="mainLinkSection" style={{paddingTop:"7em"}}>
      <div className="headshotCircle" style={{backgroundImage: "url(" + headShot + ")"}} ></div>
      <h2 className="linkPageHeaderText"> Bobby Tarian</h2>
      <div>
      {/* <StreamingPlatformsDisplay></StreamingPlatformsDisplay> */}

      {/* <section className="newsletterContainer">
                
          
          <script async src="https://subscribe-forms.beehiiv.com/embed.js"></script>
          <iframe src="https://subscribe-forms.beehiiv.com/def56aa7-e7b6-482b-af38-7e0c20d09c1d" className="beehiiv-embed" data-test-id="beehiiv-embed" frameBorder="0" scrolling="no" style={{width:"100%", height: "353px", margin:"0", borderRadius:"0px 0px 0px 0px", backgroundColor:"transparent" , boxShadow:"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)", maxWidth: "100%"}}></iframe>
            
          
      </section> */}
        {/* <ButtonLink  url ="https://open.spotify.com/track/6qMOXKJTdrlUKnMsv7RcZH?si=5ae7b71f2f914b86" text='"Everywhere" - on spotify' style={{color:"#62de7f"}}></ButtonLink>
        <ButtonLink url="https://www.youtube.com/watch?v=jdhxJ5taT9g" text="Everywhere - music video" style={{color:"#E6E276"}}></ButtonLink> */}
        <ButtonLink url={SPIDER_SONG_SPOTIFY_URL} text="Spotify" icon={faSpotify} style={{ color: "#1DBB59" }}></ButtonLink>
        <ButtonLink url={SPIDER_SONG_APPLE_URL} text="Apple Music" icon={faApple} style={{ color: "#c2cad7" }}></ButtonLink>
        <ButtonLink url={SPIDER_SONG_YOUTUBE_URL} text="YouTube" icon={faYoutube} style={{ color: "#FF0005" }}></ButtonLink>
        {/* <ButtonLink url={SOUNDCLOUD_URL} text="Soundcloud" icon={faSoundcloud} style={{color:"#F26F23"}}></ButtonLink> */}
        {/* <ButtonLink url={LIMINAL_HAZE_YOUTUBE_MUSIC_URL} text="YouTube Music" icon={faYoutubeSquare} style={{ color: "#FF250F" }}></ButtonLink> */}
        <ButtonLink url={BANDCAMP_URL} text="Bandcamp" icon={faBandcamp} style={{ color: "#62BaBB" }}></ButtonLink>
        <ButtonLink url={INSTAGRAM_URL} text="Instagram" icon={faInstagram} style={{ color: "#C14FAF" }}></ButtonLink>
        <ButtonLink url={FACEBOOK_URL} text="Facebook" icon={faFacebook} style={{ color: "#a2b5FF" }}></ButtonLink>
        <ButtonLink url={"https://magic.beehiiv.com/v1/addfdbd0-24fb-4188-9bc5-00773578fa57?email={{email}}"} text="subscribe to the newsletter" style={{ color: "#cd9cd7ff" }}></ButtonLink>
        <ButtonLink url={"/"}  text={"back to homepage"}> </ButtonLink>


      </div>
    </section>
  </div>
  );
};

export default LinkView;