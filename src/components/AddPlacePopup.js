import PopupWithForm from "./PopupWithForm.js";
import React from "react";

export default function AddPlacePopup (props) {

    const [name,setName] = React.useState("");
    const [link,setLink] = React.useState("");
   
    function handleSubmit(e) {
        e.preventDefault();
        
        props.onAddPlace({
          name:name,
          link:link
        });
        e.target.reset();
      } 


    return (
        <PopupWithForm
          title="Новое место"
          name="place"
          isOpen={props.isOpen}
          onClose={props.onClose}
          buttonText={props.isLoading ? "Добавление..." : "Добавить"}
          submitType="disabled"
          onSubmit={handleSubmit}
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
            onChange={(e) => {setName( e.target.value)}}
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
            onChange={(e) => {setLink( e.target.value)}}
          />
          <span id="link-error" className="form__error"></span>
        </PopupWithForm>
    )
}