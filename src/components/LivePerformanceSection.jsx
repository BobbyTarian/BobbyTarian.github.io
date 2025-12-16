import Here_For_You_At_Dive_Bar from "../assets/Here_For_You_At_Dive_Bar.mp4"
import LiminalHaze_at_Div_Bar from "../assets/Liminal_Haze_at_Dive_bar_480p.mp4"

const LivePerformanceSection = () => {

    return(
        <section className="LivePerformanceSection">
            <h2> <em>A Dream in Liminal Haze</em> live at Dive Bar. Oct 24, 2024.</h2>
            <video  controls="controls" >
                <source src={LiminalHaze_at_Div_Bar}></source>
            </video>

            <br></br>
            <h2> <em>Here For You</em> live at Dive Bar. Oct 24, 2024.</h2>
            <video  controls="controls" >
                <source src={Here_For_You_At_Dive_Bar}></source>
            </video>

            
          
        </section>
    );
}

export default LivePerformanceSection;