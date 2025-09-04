 // ----------------- 🎯 Featured Products Carousel -----------------
  const track = document.getElementById("carouselTrack");
  if (track) {
    const items = Array.from(track.children);
    const indicatorContainer = document.querySelector(".featured-indicators");

    items.forEach((_, i) => {
      const dot = document.createElement("button");
      if (i === 0) dot.classList.add("active");
      indicatorContainer.appendChild(dot);
    });

    const dots = Array.from(indicatorContainer.children);
    let currentIndex = 0;

    function updateIndicators(index) {
      dots.forEach((dot) => dot.classList.remove("active"));
      dots[index].classList.add("active");
    }

    setInterval(() => {
      const first = items.shift();
      items.push(first);
      track.innerHTML = "";
      items.forEach((item) => track.appendChild(item));
      currentIndex = (currentIndex + 1) % items.length;
      updateIndicators(currentIndex);
    }, 2000);
  }

  
  // ----------------- 🎯 Product Filtering -----------------
  const filterButtons = document.querySelectorAll(".button-container button");
  const products = document.querySelectorAll(".custom-col");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) =>
        btn.classList.remove("active", "button_fist_prod")
      );
      button.classList.add("active", "button_fist_prod");

      const category = button.textContent.trim().toLowerCase();
      products.forEach((product) => {
        product.style.display =
          category === "all" || product.dataset.category === category
            ? "block"
            : "none";
      });
    });
  });
// filtering products
function filterProducts(category) {
    let items = document.querySelectorAll('.item-list');
    let buttons = document.querySelectorAll('.sidehead button');

    buttons.forEach(btn => btn.classList.remove('sidehead1'));
    event.target.classList.add('sidehead1');

    items.forEach(item => {
      if (category === 'all' || item.classList.contains(category)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  filterProducts('all');

  function addToCart(name, description, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, description, price, image, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    let btn = event.target;
    btn.innerText = "Added";
    btn.style.backgroundColor = "green";
    btn.style.color = "white";
    btn.style.pointerEvents = "none"; 
    updateCartCount();
}

