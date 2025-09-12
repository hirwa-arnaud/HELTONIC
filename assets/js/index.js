    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dotsContainer = document.querySelector('.dots');

    let currentIndex = 0;
    let slideInterval;

    // Create dots
    slides.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => showSlide(i));
      dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function showSlide(index) {
      if (index < 0) index = totalSlides - 1;
      if (index >= totalSlides) index = 0;
      currentIndex = index;
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
      updateDots();
    }

    function updateDots() {
      dots.forEach(dot => dot.classList.remove('active'));
      dots[currentIndex].classList.add('active');
    }

    function nextSlide() {
      showSlide(currentIndex + 1);
    }

    function prevSlide() {
      showSlide(currentIndex - 1);
    }

    function startAutoSlide() {
      slideInterval = setInterval(nextSlide, 4000);
    }

    function stopAutoSlide() {
      clearInterval(slideInterval);
    }

    // Controls
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Pause on hover
    document.querySelector('.slider-container').addEventListener('mouseenter', stopAutoSlide);
    document.querySelector('.slider-container').addEventListener('mouseleave', startAutoSlide);

    // Start auto
    startAutoSlide();
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
  const searchInput = document.querySelector("#product-search");
  const productContainer = document.querySelector(".products");
  const productCards = Array.from(productContainer.querySelectorAll(".card"));

  // "no results" message
  const noResults = document.createElement("p");
  noResults.textContent = "No results found 😢";
  noResults.style.textAlign = "center";
  noResults.style.marginTop = "20px";
  noResults.style.fontSize = "18px";
  noResults.style.color = "#555";
  noResults.style.display = "none";
  productContainer.parentNode.appendChild(noResults);

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();

    const matched = [];
    const notMatched = [];

    productCards.forEach(card => {
      const productName = card.querySelector("h3").textContent.toLowerCase();
      const productImgAlt = card.querySelector("img").alt.toLowerCase();

      if (productName.includes(query) || productImgAlt.includes(query)) {
        matched.push(card);
      } else {
        notMatched.push(card);
      }
    });

    productContainer.innerHTML = "";
    matched.forEach(c => productContainer.appendChild(c));
    notMatched.forEach(c => productContainer.appendChild(c));
    noResults.style.display = matched.length === 0 && query !== "" ? "block" : "none";
  });
});

