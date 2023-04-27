const addtocartbutton = document.querySelectorAll(".button");
var emptyTrolly = document.getElementById("result");

const selectedImage = [];

addtocartbutton.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const productItem = button.parentElement;
    const productImage = productItem.querySelector("img");
    if (selectedImage.some((img) => img.src === productImage.src)) {
      alert("You have already selected this product agin!");
      return;
    }
    const cloneImage = productImage.cloneNode();
    emptyTrolly.appendChild(cloneImage);
    selectedImage.push(cloneImage);
  });
});
