import ShowInfoDisplay from "./ShowInfoDisplay";
const ShowsSection = () => {

    return (
        <section className="ShowsSection" id="Shows">
            <h2 className="showHeader"> Upcoming Shows</h2>
            <div className="Show">
                              
                
            <ShowInfoDisplay location="Highlandia" date="June 14th, 2025" ticketLink="https://www.highlandiafest.com/"></ShowInfoDisplay>

            </div>
          
            <br></br>
            <br></br>
            <div className="pastShow">
                  <h2>Past Shows</h2>
                <ShowInfoDisplay location="The Red Door" date="February 21st, 2025" ticketLink=""></ShowInfoDisplay>
                <ShowInfoDisplay location="Felice Cafe Single Release with David Henneberg and Esther Forseth" date="December 13th, 2024"></ShowInfoDisplay>
                <ShowInfoDisplay location = "Dive Bar  with Cooking Balconys and Kentucky" date= "October 24th, 2024 || Doors 7pm , Music 8pm" ticketLink="https://www.ticketleap.events/tickets/blondie-presents/CookingBalconys"></ShowInfoDisplay>
                <ShowInfoDisplay location="After Hours at the Commodore" date="October 6th, 2024 || 6:30pm " ticketLink="https://www.eventbrite.com/e/after-hours-at-the-commodore-wbobby-tarian-and-ryan-smith-tickets-1036300973107?aff=ebdssbdestsearch"> </ShowInfoDisplay>
                <ShowInfoDisplay location="Golden Grove Gatherings at Felice Cafe" date="August 31st, 2024 || 7pm" ticketLink="https://www.eventbrite.ca/e/golden-grove-gatherings-saturday-tickets-971271427987"></ShowInfoDisplay>
                <ShowInfoDisplay location="124 Street Grand Market" date="August 25th, 2024 || 11:30-1 pm" ticketLink="https://124grandmarket.com/sunday"></ShowInfoDisplay>
                <ShowInfoDisplay location = "Strathcona Farmers' market" date= "August 24th, 2024 || 9:30-11:30am" ticketLink="https://osfm.ca/"></ShowInfoDisplay>
                <ShowInfoDisplay location = "Strathcona Farmers' market" date= "August 10th, 2024 9:30-11:30am" ticketLink="https://osfm.ca/"></ShowInfoDisplay>
                <ShowInfoDisplay location ="Blakbar" date="August 2nd, 2024" ticketLink="https://www.facebook.com/events/s/dj-silkr0ad-bobby-tarian-neon-/1193683891680114/?mibextid=9VsGKo&rdid=Cfynx9Twp4DrUllu&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FS5BU2hb155AnKaqA%2F%3Fmibextid%3D9VsGKo" ></ShowInfoDisplay>
                <ShowInfoDisplay location="124 Street Grand Market" date="July 28th, 2024 || 1-3 pm" ticketLink="https://124grandmarket.com/sunday"></ShowInfoDisplay> 
                <ShowInfoDisplay location = "Strathcona Farmers' market" date= "July 27th, 2024 12-2pm" ticketLink="https://osfm.ca/"></ShowInfoDisplay>
                <ShowInfoDisplay location = "The Carrot" date= "July 12th, 2024 || 7pm" ticketLink = "https://www.thecarrot.ca/event-shop/void-comp-bobby-tarian"></ShowInfoDisplay>
                <ShowInfoDisplay location = "Downtown Farmers Market (104th st.)" date="July 6th, 2024 || 11:30-1:00pm" ticketLink="https://www.edmontondowntown.com/farmersmarket/"></ShowInfoDisplay>
                <ShowInfoDisplay location="124 Street Grand Market" date="June 23rd, 2024 || 1-3 pm" ticketLink="https://124grandmarket.com/sunday"></ShowInfoDisplay>
                <ShowInfoDisplay location = "Friday Nights at the Grand Night Market" date= "June 21st" ticketLink = "https://124grandmarket.com/night-markets"></ShowInfoDisplay>
                <ShowInfoDisplay location="124 Street Grand Market" date="June 9th, 2024 || 1-3 pm" ticketLink="https://124grandmarket.com/sunday"></ShowInfoDisplay>
                <ShowInfoDisplay location = "Friday Nights at the Grand Night Market" date= "June 7th 2024" ticketLink = "https://124grandmarket.com/night-markets"></ShowInfoDisplay>
                <ShowInfoDisplay location = "Ottewell Farmers market" date=" June 6th 2024" ticketLink=""></ShowInfoDisplay>
                <ShowInfoDisplay location = "Dive Bar: unplugged" date="June 5th 2024" ticketLink = "https://www.facebook.com/events/811262853969346"></ShowInfoDisplay>
                <ShowInfoDisplay location = "EPL MiR — Spring Showcase" ticketLink = "https://epl.bibliocommons.com/events/661edf0fe3e1ee30003a5e1a" date= "May 31st, 2024"></ShowInfoDisplay> 
                <ShowInfoDisplay location = "124 Street Grand Market" ticketLink = "https://124grandmarket.com/thursday-1" date="May 23rd, 2024 || 6-8pm"></ShowInfoDisplay>
                <ShowInfoDisplay location= "124 Street Grand Market" ticketLink = "https://124grandmarket.com/thursday-1" date="May 9th, 2024 || 6-8pm"></ShowInfoDisplay>
                <ShowInfoDisplay location="Rocking 4 Dollars at Buckingham" ticketLink = "" date="Mar 25, 2024"></ShowInfoDisplay>
                <ShowInfoDisplay location="BLAKBAR" ticketLink = "https://www.facebook.com/events/7051742518271512/?acontext=%7B%22ref%22%3A%2252%22%2C%22action_history%22%3A%22[%7B%5C%22surface%5C%22%3A%5C%22share_link%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22share_link%5C%22%2C%5C%22extra_data%5C%22%3A%7B%5C%22invite_link_id%5C%22%3A1878852045903015%7D%7D]%22%7D" date = "Feb 23, 2024"></ShowInfoDisplay>
                <ShowInfoDisplay location="Felice Cafe" ticketLink = "https://www.eventbrite.ca/e/felice-noir-bobby-tarian-tayler-grace-tickets-800355172867?aff=oddtdtcreator" date="Feb 16, 2024"></ShowInfoDisplay>


            </div>

        </section>
    );

}

export default ShowsSection;