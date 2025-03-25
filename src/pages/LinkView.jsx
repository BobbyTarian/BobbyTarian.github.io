import ButtonLink from "../components/ButtonLink";
import {
  SPOTIFY_URL, BANDCAMP_URL, FACEBOOK_URL, INSTAGRAM_URL, SOUNDCLOUD_URL, APPLE_MUSIC_URL, YOUTUBE_URL,
  LIMINAL_HAZE_APPLE_URL, LIMINAL_HAZE_SPOTIFY_URI,
  LIMINAL_HAZE_YOUTUBE_URL, LIMINAL_HAZE_YOUTUBE_MUSIC_URL
} from '../constants';
import { faSpotify, faYoutube, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faBandcamp } from '@fortawesome/free-brands-svg-icons';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faApple } from "@fortawesome/free-brands-svg-icons";
import layingInGrass from "../assets/layingInGrass.jpg";
import MetaPixel from "../utils/Meta/metaPixel";

const LinkView = () => {
  return (<div className="linkPageBackground" >
    <MetaPixel></MetaPixel>
    <section className="mainLinkSection" >
      <h2> A Dream in Liminal Haze - Bobby Tarian</h2>
      <div style={{ opacity: 1 }}>


        {/* <ButtonLink  url ="https://open.spotify.com/track/6qMOXKJTdrlUKnMsv7RcZH?si=5ae7b71f2f914b86" text='"Everywhere" - on spotify' style={{color:"#62de7f"}}></ButtonLink>
        <ButtonLink url="https://www.youtube.com/watch?v=jdhxJ5taT9g" text="Everywhere - music video" style={{color:"#E6E276"}}></ButtonLink> */}
        <ButtonLink url={LIMINAL_HAZE_SPOTIFY_URI} text="Spotify" icon={faSpotify} style={{ color: "#1DBB59" }}></ButtonLink>
        <ButtonLink url={LIMINAL_HAZE_APPLE_URL} text="Apple Music" icon={faApple} style={{ color: "#c2cad7" }}></ButtonLink>
        <ButtonLink url={LIMINAL_HAZE_YOUTUBE_URL} text="YouTube" icon={faYoutube} style={{ color: "#FFb7b" }}></ButtonLink>
        {/* <ButtonLink url={SOUNDCLOUD_URL} text="Soundcloud" icon={faSoundcloud} style={{color:"#F26F23"}}></ButtonLink> */}
        <ButtonLink url={LIMINAL_HAZE_YOUTUBE_MUSIC_URL} text="YouTube Music" icon={faYoutubeSquare} style={{ color: "#F365BF" }}></ButtonLink>
        <ButtonLink url={BANDCAMP_URL} text="Bandcamp" icon={faBandcamp} style={{ color: "#62BaBB" }}></ButtonLink>
        <ButtonLink url={INSTAGRAM_URL} text="Instagram" icon={faInstagram} style={{ color: "#C14FAF" }}></ButtonLink>
        <ButtonLink url={FACEBOOK_URL} text="Facebook" icon={faFacebook} style={{ color: "#a2b5FF" }}></ButtonLink>
        <ButtonLink url={"/"}  text={"back to homepage"}> </ButtonLink>


      </div>
    </section>
  </div>
  );
};

export default LinkView;