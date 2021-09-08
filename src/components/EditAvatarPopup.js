import PopupWithForm from "./PopupWithForm.js";
import React, { useRef } from "react";

export default function EditAvatarPopup (props) {
    
    const avatarEdit = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();
      
        props.onUpdateAvatar({
          avatar: avatarEdit.current.value
        });
      } 

    return (
        <PopupWithForm
          title="Обновить аватар"
          name="avatar"
          isOpen={props.isOpen}
          onClose={props.onClose}
          buttonText={props.isLoading ? "Сохранение..." : "Сохранить"}
          submitType="disabled"
          onSubmit={handleSubmit}
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
            ref={avatarEdit}
          />
          <span id="avatar-error" className="form__error"></span>
        </PopupWithForm>
    )
}