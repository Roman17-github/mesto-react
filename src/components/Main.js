import React from "react";
import api from "../utils/Api.js";
import Card from "./Card.js";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([userInfo, cards]) => {
        setUserName(userInfo.name);
        setUserAvatar(userInfo.avatar);
        setUserDescription(userInfo.about);
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
          <img src={userAvatar} alt="аватар" className="profile__image" />
          <div
            className="profile__icon"
            onClick={() => props.onEditAvatar()}
          ></div>
        </div>

        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            type="button"
            className="profile__edit"
            onClick={() => props.onEditProfile(true)}
          ></button>
          <p className="profile__subline">{userDescription}</p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={() => props.onPlaceAdd()}
        ></button>
      </section>

      <section className="elements">
        {cards.map((card) => {
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
