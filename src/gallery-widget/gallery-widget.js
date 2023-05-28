import Gallery from "../gallery/gallery";
import validateUrl from "../js/validate";
import "./gallery-widget.css";

export default class GalleryWidget {
  constructor() {
    this.element = document.querySelector(".gallery-widget");
    this.form = this.element.querySelector(".loader");
    this.titleText = this.element.querySelector(".title-text");
    this.linkText = this.element.querySelector(".link-text");
    this.btn = this.element.querySelector(".button");
    this.panelList = this.element.querySelector(".panel-list");
    this.gallery = new Gallery();

    this.onBtnClick = this.onBtnClick.bind(this);
    this.addPicture = this.addPicture.bind(this);
    this.showError = this.showError.bind(this);

    this.btn.addEventListener("click", this.onBtnClick);
  }

  addPicture(e, title, image) {
    e.preventDefault();
    this.gallery.add(title, image);
    this.clear();
  }

  onBtnClick(e) {
    e.preventDefault();
    const link = this.linkText.value;
    const title = this.titleText.value;

    if (!validateUrl(link)) {
      this.showError();
      return;
    }
    const image = document.createElement("img");
    image.src = link;

    image.addEventListener("load", (e) => this.addPicture(e, title, image));
    image.addEventListener("error", this.showError);
  }

  clear() {
    this.form.reset();
    if (this.error && !this.error.classList.contains("disable")) {
      this.error.classList.add("disable");
    }
  }

  createErrorMessage() {
    const errorMessage = document.createElement("span");
    errorMessage.classList.add("error-text");
    errorMessage.textContent = "Неверный URL изображения";

    this.error = errorMessage;
    this.panelList.append(this.error);
  }

  hideMessage(e) {
    const message = e.target.closest(".error");
    message.classList.add("disable");
  }

  showError() {
    if (!this.error) {
      this.createErrorMessage();
    } else {
      this.error.classList.remove("disable");
    }
  }
}
