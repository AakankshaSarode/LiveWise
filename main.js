document.addEventListener("DOMContentLoaded", function () {
  const searchInputs = [
    document.getElementById("propertySearch"),
    document.getElementById("navbarSearch")
  ];

  const cards = document.querySelectorAll(".card");

  searchInputs.forEach(input => {
    if (input) {
      input.addEventListener("input", function () {
        const query = this.value.toLowerCase();
        cards.forEach(card => {
          const title = card.querySelector(".card-title").textContent.toLowerCase();
          card.parentElement.style.display = title.includes(query) ? "block" : "none";
        });
      });
    }
  });

  // Optional: Active nav link
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active", "text-warning");
    }
  });
  
});
