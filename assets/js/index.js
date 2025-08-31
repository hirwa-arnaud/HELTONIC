let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slider = document.querySelector('.slider');

function showSlide(index) {
  currentIndex = index % totalSlides;

  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}
setInterval(() => {
  showSlide(currentIndex + 1);
}, 2000);
function changeImage(imageSrc) {
    document.getElementById('main-image').src = imageSrc;
}

function increaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
}

function decreaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
}
 window.addEventListener("load", () => {
      const loader = document.getElementById("loader");
      const content = document.getElementById("content");
      
      loader.style.display = "none";
      content.style.display = "block";
    });
       window.addEventListener("load", () => {
      const loader = document.getElementById("loader");
      const content = document.getElementById("content");
      
      loader.style.display = "none";
      content.style.display = "block";
    });
    
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".input input");
  const productContainer = document.querySelector(".products");
  const productCards = Array.from(productContainer.querySelectorAll(".card"));

  // Create a "no results" message
  const noResults = document.createElement("p");
  noResults.textContent = "No results found 😢";
  noResults.style.textAlign = "center";
  noResults.style.marginTop = "20px";
  noResults.style.fontSize = "18px";
  noResults.style.color = "#555";
  noResults.style.display = "none";
  productContainer.parentNode.appendChild(noResults);

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    const matched = [];
    const notMatched = [];

    productCards.forEach(card => {
      const productName = card.querySelector("p").textContent.toLowerCase();
      const productImgAlt = card.querySelector("img").alt.toLowerCase();

      if (productName.includes(query) || productImgAlt.includes(query)) {
        matched.push(card);
      } else {
        notMatched.push(card);
      }
    });

    // Clear container and re-append in order
    productContainer.innerHTML = "";
    matched.forEach(c => productContainer.appendChild(c));
    notMatched.forEach(c => productContainer.appendChild(c));

    // Show or hide "no results" message
    if (matched.length === 0 && query.trim() !== "") {
      noResults.style.display = "block";
    } else {
      noResults.style.display = "none";
    }
  });
});

