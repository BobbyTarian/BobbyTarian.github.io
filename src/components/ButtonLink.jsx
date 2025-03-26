import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { propTypes } from 'react-bootstrap/esm/Image';

const ButtonLink = (props) => {
    const pixelEventTrigger = (buttonText) => {
        if (typeof window !== "undefined") {
            if (window.fbq != null) { 
                window.fbq('trackCustom', 'LinkClick', {buttonText: buttonText});
            }
        }
        
    }
    return (
        <div className="buttonLink">
            
            <a className="buttonAnchorTag" href={props.url} style={props.style} target="_blank" rel="noreferrer" onClick={pixelEventTrigger()}>
                <FontAwesomeIcon icon = {props.icon} size="1x"></FontAwesomeIcon>
                 <span className="buttonLinkText">{props.text}</span>
            </a>
        </div>
    );

}

// ButtonLink.propTypes = {
//   icon: propTypes.string.isRequired,
//   url: propTypes.string.isRequired,
//   text: propTypes.string.isRequired,
//   style: propTypes.style.isRequired
// }

export default ButtonLink;