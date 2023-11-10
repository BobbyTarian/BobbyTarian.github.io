
const ButtonLink = ({text, url}) => {

    return (
        <div className="buttonLink">
            <a href={url}> {text}</a>
        </div>
    );

}


export default ButtonLink;