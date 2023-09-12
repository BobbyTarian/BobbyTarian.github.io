import bannerImage from "../assets/bannerImage.jpg";


const BannerImage = ()=> {

    return (
        <div className="BannerImage" style={{backgroundImage: "url(" + bannerImage + ")"}} id="Home">
            <h1> Bobby Tarian</h1>
        </div>
    );
}
export default BannerImage;