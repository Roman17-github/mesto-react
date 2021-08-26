export default function PopupWithForm(props) {
    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
            <div className="popup__container">
              <form name={`form-${props.name}`} className="form" novalidate>
                <h2 class="popup__title">{props.title}</h2>
                {props.children}
              </form>
              <button type="button" className="popup__close" onClick={() => props.onClose()}></button>
            </div>
          </div>
    )
}