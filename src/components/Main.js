import React from "react";
import api from "../utils/Api.js";
import Card from "./Card.js";

function Main(props) {
  const [isuserName, setuserName] = React.useState("");
  const [isuserAvatar, setuserAvatar] = React.useState("");
  const [isuserDescription, setuserDescription] = React.useState("");
  const [isCards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([userInfo, cards]) => {
        setuserName(userInfo.name);
        setuserAvatar(userInfo.avatar);
        setuserDescription(userInfo.about);
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar">
          <img
            src={isuserAvatar}
            alt="аватар"
            className="profile__image"
            alt="аватар"
          />
          <div
            className="profile__icon"
            onClick={() => props.onEditAvatar()}
          ></div>
        </div>

        <div className="profile__info">
          <h1 className="profile__name">{isuserName}</h1>
          <button
            type="button"
            className="profile__edit"
            onClick={() => props.onEditProfile(true)}
          ></button>
          <p className="profile__subline">{isuserDescription}</p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={() => props.onPlaceAdd()}
        ></button>
      </section>

      <section className="elements">
        {isCards.map((card) => {
          return (
            <Card
              onCardClick={props.onCardClick}
              key={card._id}
              link={card.link}
              name={card.name}
              likes={card.likes}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
