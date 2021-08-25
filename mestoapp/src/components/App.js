import "../index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import React from "react";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  const closeAllPopups = () => {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard({});
  };

  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard({
      link: card.link,
      name: card.name,
    });
  };

  return (
    <>
      <body className="body">
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
        >
          <input
            name="name"
            type="text"
            placeholder="ваше имя"
            className="popup__input"
            id="name"
            minlength="2"
            maxlength="40"
            required
          />
          <span id="name-error" className="form__error"></span>
          <input
            name="about"
            type="text"
            placeholder="род занятий"
            className="popup__input"
            id="subline"
            minlength="2"
            maxlength="200"
            required
          />
          <span id="subline-error" class="form__error"></span>
          <button
            type="submit"
            className="popup__submit popup__submit_disabled"
            disabled
          >
            Сохранить
          </button>
        </PopupWithForm>
        <PopupWithForm
          title="Новое место"
          name="place"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            name="name"
            type="text"
            placeholder="Название"
            className="popup__input"
            id="place"
            minlength="2"
            maxlength="40"
            required
          />
          <span id="place-error" class="form__error"></span>
          <input
            name="link"
            type="url"
            placeholder="Ссылка на картинку"
            className="popup__input"
            id="link"
            minlength="2"
            maxlength="200"
            required
          />
          <span id="link-error" class="form__error"></span>
          <button
            type="submit"
            className="popup__submit popup__submit_disabled"
            disabled
          >
            Добавить
          </button>
        </PopupWithForm>
        <PopupWithForm
          title="Обновить аватар"
          name="avatar"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            name="avatar"
            type="url"
            placeholder="Ссылка на картинку"
            className="popup__input"
            id="avatar"
            minlength="2"
            maxlength="200"
            required
          />
          <span id="avatar-error" className="form__error"></span>
          <button
            type="submit"
            className="popup__submit popup__submit_disabled"
            disabled
          >
            Сохранить
          </button>
        </PopupWithForm>
        <PopupWithForm title="Вы уверены?" name="delete">
          <button type="submit" className="popup__submit popup__submit_delete">
            Да
          </button>
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        <Footer />

        <div className="popups">
          <div className="popup popup_type_photo">
            <div className="popup__photoContainer">
              <img
                src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"
                alt="картинка"
                className="popup__image"
              />
              <p className="popup__photoName"></p>
              <button
                type="button"
                className="popup__close popup__close_type_photo"
              ></button>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
