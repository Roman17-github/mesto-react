import React from "react";
import api from "../utils/Api.js";
import Card from "./Card.js";

function Main(props) {
  const [userName, setuserName] = React.useState("");
  const [userAvatar, setuserAvatar] = React.useState("");
  const [userDescription, setuserDescription] = React.useState("");
  const [Cards, setCards] = React.useState([]);

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
        {Cards.map((card) => {
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
