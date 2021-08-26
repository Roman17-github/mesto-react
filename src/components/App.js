import "../index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import React from "react";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard({
      link: card.link,
      name: card.name,
    });
  };

  return (
    <div className="body">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onPlaceAdd={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <PopupWithForm
        title="Редактировать профиль"
        name="edit"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
        submitType="disabled"
      >
        <input
          name="name"
          type="text"
          placeholder="ваше имя"
          className="popup__input"
          id="name"
          minLength="2"
          maxLength="40"
          required
        />
        <span id="name-error" className="form__error"></span>
        <input
          name="about"
          type="text"
          placeholder="род занятий"
          className="popup__input"
          id="subline"
          minLength="2"
          maxLength="200"
          required
        />
        <span id="subline-error" className="form__error"></span>
      </PopupWithForm>
      <PopupWithForm
        title="Новое место"
        name="place"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText="Добавить"
        submitType="disabled"
      >
        <input
          name="name"
          type="text"
          placeholder="Название"
          className="popup__input"
          id="place"
          minLength="2"
          maxLength="40"
          required
        />
        <span id="place-error" className="form__error"></span>
        <input
          name="link"
          type="url"
          placeholder="Ссылка на картинку"
          className="popup__input"
          id="link"
          minLength="2"
          maxLength="200"
          required
        />
        <span id="link-error" className="form__error"></span>
      </PopupWithForm>
      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
        submitType="disabled"
      >
        <input
          name="avatar"
          type="url"
          placeholder="Ссылка на картинку"
          className="popup__input"
          id="avatar"
          minLength="2"
          maxLength="200"
          required
        />
        <span id="avatar-error" className="form__error"></span>
      </PopupWithForm>
      <PopupWithForm
        title="Вы уверены?"
        name="delete"
        buttonText="Да"
        submitType="delete"
      />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <Footer />
    </div>
  );
}

export default App;
