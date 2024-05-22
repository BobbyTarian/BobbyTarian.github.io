import ShowInfoDisplay from "./ShowInfoDisplay";
const ShowsSection = () => {

    return (
        <section className="ShowsSection" id="Shows">
            <h2 className="showHeader"> Upcoming Shows</h2>
            <div className="Show">
                <ShowInfoDisplay location = "124 Street Grand Market" ticketLink = "https://124grandmarket.com/thursday-1" date="May 23rd, 2024 || 6-8pm"></ShowInfoDisplay>
                <ShowInfoDisplay location = "EPL MiR — Spring Showcase" ticketLink = "https://epl.bibliocommons.com/events/661edf0fe3e1ee30003a5e1a" date= "May 31st, 2024"></ShowInfoDisplay> 
            </div>
          
            <br></br>
            <div className="pastShow">
                  <h2>Past Shows</h2>

             <ShowInfoDisplay location="Felice Cafe" ticketLink = "https://www.eventbrite.ca/e/felice-noir-bobby-tarian-tayler-grace-tickets-800355172867?aff=oddtdtcreator" date="Feb 16, 2024"></ShowInfoDisplay>
                <ShowInfoDisplay location="BLAKBAR" ticketLink = "https://www.facebook.com/events/7051742518271512/?acontext=%7B%22ref%22%3A%2252%22%2C%22action_history%22%3A%22[%7B%5C%22surface%5C%22%3A%5C%22share_link%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22share_link%5C%22%2C%5C%22extra_data%5C%22%3A%7B%5C%22invite_link_id%5C%22%3A1878852045903015%7D%7D]%22%7D" date = "Feb 23, 2024"></ShowInfoDisplay>
                <ShowInfoDisplay location="Rocking 4 Dollars at Buckingham" ticketLink = "" date="Mar 25, 2024"></ShowInfoDisplay>
                <ShowInfoDisplay location= "124 Street Grand Market" ticketLink = "" date="May 9th, 2024 || 6-8pm"></ShowInfoDisplay>
            </div>

        </section>
    );

}

export default ShowsSection;