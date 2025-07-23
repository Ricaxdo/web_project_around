let editButton = document.querySelector(".profile__edit-icon");
let popup = document.querySelector(".popup");
let popupCloseButton = document.querySelector(".popup__close-button-icon");
let popupSubmitButton = document.querySelector(".popup__submit-button");

let inputName = document.querySelector(".popup__input-name");
let inputAbout = document.querySelector(".popup__input-about");

let infoName = document.querySelector(".profile__info-name");
let infoAbout = document.querySelector(".profile__info-description");

function openPopup() {
  popup.classList.remove("popup_unshown");
  inputName.value = infoName.textContent;
  inputAbout.value = infoAbout.textContent;
}

function closePopup() {
  popup.classList.add("popup_unshown");
}

function saveProfile(evt) {
  evt.preventDefault();
  infoName.textContent = inputName.value;
  infoAbout.textContent = inputAbout.value;
  closePopup();
}

editButton.addEventListener("click", openPopup);
popupCloseButton.addEventListener("click", closePopup);
popupSubmitButton.addEventListener("click", saveProfile);
