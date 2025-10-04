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
        const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const product = products.find(p => p.id === id);

  if (product) {
    document.getElementById("main-image").src = product.image;
    document.querySelector(".product-details h1").textContent = product.name;
    document.querySelector(".current-price").textContent = product.price;
    document.querySelector(".description").textContent = product.description;
  } else {
    document.querySelector(".product-details").innerHTML = "<h2>Product not found</h2>";
  }

  function decreaseQuantity() {
    const q = document.getElementById("quantity");
    if (q.value > 1) q.value--;
  }

  function increaseQuantity() {
    const q = document.getElementById("quantity");
    q.value++;
  }

  // ✅ ADD TO CART FUNCTIONALITY
  function addToCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Limit to 4 items
    if (cart.length >= 4) {
      alert("Cart is full. You can only add up to 4 items.");
      return;
    }

    const quantity = parseInt(document.getElementById("quantity").value);

    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity
    };

    // Add to cart
    cart.push(item);

    // Save updated cart
    localStorage.setItem("cart", JSON.stringify(cart));

    // Redirect to cart page
    window.location.href = "cart.html";
  }