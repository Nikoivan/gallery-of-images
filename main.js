/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/gallery/gallery.js

class Gallery {
  constructor() {
    this.element = document.querySelector(".gallery");
    this.imageList = this.element.querySelector(".image-list");
    this.delete = this.delete.bind(this);
  }
  add(title, image) {
    const imageContainer = document.createElement("li");
    imageContainer.classList.add("item-image");
    const closeBtn = document.createElement("span");
    closeBtn.classList.add("close-btn");
    closeBtn.textContent = "X";
    closeBtn.addEventListener("click", this.delete);
    const imageTitle = document.createElement("h4");
    imageTitle.classList.add("image-title");
    imageTitle.textContent = title;
    image.classList.add("image");
    imageContainer.append(closeBtn);
    imageContainer.append(imageTitle);
    imageContainer.append(image);
    this.imageList.append(imageContainer);
  }
  delete(e) {
    e.target.closest(".item-image").remove();
  }
}
;// CONCATENATED MODULE: ./src/js/validate.js
function validateUrl(url) {
  return /\.(png|svg|jpg|jpeg|gif)$/i.test(url);
}
;// CONCATENATED MODULE: ./src/gallery-widget/gallery-widget.js



class GalleryWidget {
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
    image.addEventListener("load", e => this.addPicture(e, title, image));
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
;// CONCATENATED MODULE: ./src/js/app.js

const gallery = new GalleryWidget();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;