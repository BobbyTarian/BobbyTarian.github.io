import Here_For_You_At_Dive_Bar from "../assets/Here_For_You_At_Dive_Bar.mp4"

const LivePerformanceSection = () => {

    return(
        <section className="LivePerformanceSection">
            <h2> <em>Here For You</em> live at Dive Bar. Oct 24, 2024.</h2>
            <video  controls="controls" >
                <source src={Here_For_You_At_Dive_Bar}></source>
            </video>
        </section>
    );
}

export default LivePerformanceSection;