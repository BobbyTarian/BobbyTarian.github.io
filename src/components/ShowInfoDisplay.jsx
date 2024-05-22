import { propTypes } from "react-bootstrap/esm/Image";
const ShowInfoDisplay = (props) => {
  const ticketLink = props.ticketLink || "";
  if( ticketLink!= null && ticketLink.length > 0 ) {

  

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
    else {
         return (
      <div className="showInfoDisplay">
          <div className="ShowInfo">
                  <a className="ShowLink noLink" >
                      {props.location}
                  </a> 
                  <p className= "ShowDate"> {props.date}</p>
              </div>

      </div>);
    }
} 

ShowInfoDisplay.propTypes = {
  ticketLink: propTypes.string,
  location: propTypes.string,
  date: propTypes.string
}
export default ShowInfoDisplay;