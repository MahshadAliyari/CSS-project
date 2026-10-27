const productCards = document.querySelectorAll(".product-card");

const categoryLinks = document.querySelectorAll(
  "#categoryFilters a"
);

categoryLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const selectedCategory = link.dataset.category;

    productCards.forEach((card) => {
      const productCategory = card.dataset.category;

      if (productCategory === selectedCategory) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
});