import ButtonLink from "../components/ButtonLink";
import { SPOTIFY_URL, BANDCAMP_URL, FACEBOOK_URL, INSTAGRAM_URL, SOUNDCLOUD_URL, APPLE_MUSIC_URL, YOUTUBE_URL} from '../constants';
import {faSpotify, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { faBandcamp } from '@fortawesome/free-brands-svg-icons';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faApple } from "@fortawesome/free-brands-svg-icons";

const LinkView = () => {
  return (<div>
    <section className="mainLinkSection">
      <h2> Social Media and streaming links for Bobby Tarian</h2>
        <ButtonLink url="https://www.youtube.com/watch?v=pX-PYqUUbJk" text="Here For You Lyric video" style={{color:"#E6E276"}}></ButtonLink>
        <ButtonLink url={SPOTIFY_URL} text="Spotify" icon={faSpotify} style={{color:"#1DB954"}}></ButtonLink>
        <ButtonLink url={BANDCAMP_URL} text="Bandcamp" icon={faBandcamp} style={{color:"#629aa9"}}></ButtonLink>
        <ButtonLink url={APPLE_MUSIC_URL} text="Apple Music" icon={faApple} style={{color:"#c2cad7"}}></ButtonLink>
        <ButtonLink url={YOUTUBE_URL} text="YouTube" icon={faYoutube} style={{color:"#FF0000"}}></ButtonLink>
        <ButtonLink url={INSTAGRAM_URL} text="Instagram" icon={faInstagram} style={{color:"#C13584"}}></ButtonLink>
        <ButtonLink url={FACEBOOK_URL} text="Facebook" icon={faFacebook} style={{color:"#a2b5dd"}}></ButtonLink>
        <ButtonLink url={SOUNDCLOUD_URL} text="Soundcloud" icon={faSoundcloud} style={{color:"#F26F23"}}></ButtonLink>

        
        
    </section>
    </div>
  );
};

export default LinkView;