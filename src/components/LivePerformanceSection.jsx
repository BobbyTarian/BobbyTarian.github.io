import LiminalHaze_at_Div_Bar from "../assets/Liminal_Haze_at_Dive_bar_480p.mp4"
import theFeeling from "../assets/The_feeling.mp4"

const LivePerformanceSection = () => {

    return(
        <section className="LivePerformanceSection">
            <h2> <em>The Feeling</em> live at The Aviary Dec. 11, 2025.</h2>
            <video  controls="controls" >
                <source src={theFeeling}></source>
            </video>
            <br></br>
            <h2> <em>A Dream in Liminal Haze</em> live at Dive Bar. Oct 24, 2024.</h2>
            <video  controls="controls" >
                <source src={LiminalHaze_at_Div_Bar}></source>
            </video>
    
            
            
          
        </section>
    );
}

export default LivePerformanceSection;