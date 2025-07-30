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
let inputTitle = document.querySelector(".addPopup__input-title");
let inputLink = document.querySelector(".addPopup__input-link");
let photographyContainer = document.querySelector(".photography");
let trashButtons = document.querySelectorAll(".photography__trash-icon");

function openAddPopup() {
  addPopup.classList.remove("addPopup_unshown");
}

function closeAddPopup() {
  addPopup.classList.add("addPopup_unshown");
}

function deletePhotographyCard(evt) {
  const card = evt.target.closest(".photography__card");
  if (card) {
    card.remove();
  }
}

addButton.addEventListener("click", openAddPopup);
addPopupCloseButton.addEventListener("click", closeAddPopup);

function addPhotographyCard(titleValue, linkValue) {
  const addPhotographyCardTemplate = document.querySelector(
    "#photography-card-template"
  ).content;
  const cardElement = addPhotographyCardTemplate
    .querySelector(".photography__card")
    .cloneNode(true);

  cardElement.querySelector(".photography__info-title").textContent =
    titleValue;
  cardElement.querySelector(".photography__card-image").src = linkValue;
  cardElement.querySelector(
    ".photography__card-image"
  ).alt = `Imagen de ${titleValue}`;

  cardElement
    .querySelector(".photography__trash-icon")
    .addEventListener("click", deletePhotographyCard);

  photographyContainer.append(cardElement);
}

addPopupSubmitButton.addEventListener("click", function () {
  const title = document.querySelector(".addPopup__input-title");
  const link = document.querySelector(".addPopup__input-link");

  addPhotographyCard(title.value, link.value);

  title.value = "";
  link.value = "";

  closeAddPopup();
});

const initialCards = [
  {
    title: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    title: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    title: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    title: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    title: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    title: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

initialCards.forEach(function (card) {
  addPhotographyCard(card.title, card.link);
});
