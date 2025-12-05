import ButtonLink from "../components/ButtonLink";
const NewsletterView = ()=> {

    return(
    <div className="NewsletterMain sunsetNatureBackground" >
        <div className="headshotCircle" ></div>
        <h2 className="linkPageHeaderText"> Bobby Tarian</h2>

        <section className="newsletterContainer" style={{padding:"2em"}}>
                
            <script async src="https://subscribe-forms.beehiiv.com/embed.js"></script>
            <iframe src="https://subscribe-forms.beehiiv.com/def56aa7-e7b6-482b-af38-7e0c20d09c1d" className="beehiiv-embed" data-test-id="beehiiv-embed" frameBorder="0" scrolling="no" style={{width:"100%", height: "353px", margin:"0", borderRadius:"0px 0px 0px 0px", backgroundColor:"transparent" , boxShadow:"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)", maxWidth: "100%"}}></iframe>
                
            
        </section>
        <ButtonLink url={"/"}  text={"back to homepage"}> </ButtonLink>
    </div>
     );
}

export default NewsletterView;