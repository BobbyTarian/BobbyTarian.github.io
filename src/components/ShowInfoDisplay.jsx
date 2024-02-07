import { propTypes } from "react-bootstrap/esm/Image";
const ShowInfoDisplay = (props) => {

    return (
    <div className="showInfoDisplay">
        <div className="ShowInfo">
                <a className="ShowLink"  href={props.ticketLink} target="_blank" rel="noreferrer" >
                     {props.location}
                </a> 
                <p className= "ShowDate"> {props.date}</p>
            </div>

    </div>);
} 

ShowInfoDisplay.propTypes = {
  ticketLink: propTypes.string,
  location: propTypes.string,
  date: propTypes.string
}
export default ShowInfoDisplay;