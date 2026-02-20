
  const filterButtons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".card");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {

      // active button styling
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");

      cards.forEach(card => {
        const categories = card.getAttribute("data-category");

        if (filter === "all") {
          card.style.display = "block";
        } else if (categories && categories.includes(filter)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });

    });
  });