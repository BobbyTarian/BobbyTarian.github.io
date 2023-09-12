import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const platformDisplayLink = (props) => {

    return (
    <a className="PlatformDisplayLink" href={props.link} target='_blank' rel="noreferrer">
        <FontAwesomeIcon icon = {props.icon} size="3x"></FontAwesomeIcon>
    </a>
    );
}
export default platformDisplayLink;