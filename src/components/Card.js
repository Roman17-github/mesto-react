export default function Card(props) {
    
    const handleClick = () => {
        props.onCardClick(props);
    }

  return (
    <div className="element">
      <button type="button" className="element__delete"></button>
      <img
        src={props.link}
        alt="картинка"
        className="element__image"
        onClick={handleClick}
      />
      <div className="element__bottom">
        <p className="element__name">{props.name}</p>
        <div className="like-group">
          <button type="button" class="element__like"></button>
          <div className="element__like-count">{props.likes.length}</div>
        </div>
      </div>
    </div>
  );
}
