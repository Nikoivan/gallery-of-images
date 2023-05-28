import "./gallery.css";

export default class Gallery {
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
