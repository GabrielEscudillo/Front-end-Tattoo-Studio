import "./ArtistCard.css"
export const ArtistCard = ({id, photo, name}) => {

    return (
      
        <div className="artistCard" key={id}>
        <div className="cardContent">
          <img className="artistImg" src={photo}></img>
          <div id="artistName">{name}</div>
        </div>
      </div>
    );
}