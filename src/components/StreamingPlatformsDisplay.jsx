import {faSpotify} from '@fortawesome/free-brands-svg-icons';
import { faBandcamp } from '@fortawesome/free-brands-svg-icons';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import PlatformDisplayLink from './PlatformDisplayLink';
import { SPOTIFY_URL, BANDCAMP_URL, FACEBOOK_URL, INSTAGRAM_URL, SOUNDCLOUD_URL} from '../constants';

const streamingPlatformsDisplay = () => {
    
    return (
        <div className='PlatformsDisplayMain'>
            <PlatformDisplayLink icon = {faSpotify} link = {SPOTIFY_URL}></PlatformDisplayLink>          
            <PlatformDisplayLink icon = {faBandcamp} link={BANDCAMP_URL}></PlatformDisplayLink>
            <PlatformDisplayLink icon = {faSoundcloud} link={SOUNDCLOUD_URL}></PlatformDisplayLink>
            <PlatformDisplayLink icon = {faInstagram} link={INSTAGRAM_URL}></PlatformDisplayLink>
            <PlatformDisplayLink icon = {faFacebook} link={FACEBOOK_URL}></PlatformDisplayLink>
        </div>
    );
}

export default streamingPlatformsDisplay;