let editButton = document.querySelector(".profile__edit-icon");
let editPopup = document.querySelector(".editPopup");
let editPopupCloseButton = document.querySelector(
  ".editPopup__close-button-icon"
);
let editPopupSubmitButton = document.querySelector(".editPopup__submit-button");

let inputName = document.querySelector(".editPopup__input-name");
let inputAbout = document.querySelector(".editPopup__input-about");

let infoName = document.querySelector(".profile__info-name");
let infoAbout = document.querySelector(".profile__info-description");

function openEditPopup() {
  editPopup.classList.remove("editPopup_unshown");
  inputName.value = infoName.textContent;
  inputAbout.value = infoAbout.textContent;
}

function closeEditPopup() {
  editPopup.classList.add("editPopup_unshown");
}

function saveProfile(evt) {
  evt.preventDefault();
  infoName.textContent = inputName.value;
  infoAbout.textContent = inputAbout.value;
  closeEditPopup();
}

editButton.addEventListener("click", openEditPopup);
editPopupCloseButton.addEventListener("click", closeEditPopup);
editPopupSubmitButton.addEventListener("click", saveProfile);
