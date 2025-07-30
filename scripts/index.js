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

let addButton = document.querySelector(".profile__add-button-rectangle");
let addPopup = document.querySelector(".addPopup");
let addPopupCloseButton = document.querySelector(
  ".addPopup__close-button-icon"
);
let addPopupSubmitButton = document.querySelector(".addPopup__submit-button");

function openAddPopup() {
  addPopup.classList.remove("addPopup_unshown");
}

function closeAddPopup() {
  addPopup.classList.add("addPopup_unshown");
}

addButton.addEventListener("click", openAddPopup);
addPopupCloseButton.addEventListener("click", closeAddPopup);
