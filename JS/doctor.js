// Expand / Collapse patient card
document.querySelectorAll(".patient-summary").forEach(card => {
  card.addEventListener("click", () => {
    const parent = card.parentElement;
    parent.classList.toggle("active");

    const arrow = card.querySelector(".arrow");
    arrow.classList.toggle("rotate");

    const details = parent.querySelector(".patient-details");
    if (details) {
      details.style.display =
        details.style.display === "none" ? "grid" : "none";
    }
  });
});


// Dark mode toggle
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Expand / Collapse patient card
document.querySelectorAll(".patient-summary").forEach(card => {
  card.addEventListener("click", () => {
    const parent = card.parentElement;

    parent.classList.toggle("active");

    const arrow = card.querySelector(".arrow");
    arrow.classList.toggle("rotate");

    const details = parent.querySelector(".patient-details");
    if (details) {
      details.style.display =
        details.style.display === "none" || !details.style.display
          ? "grid"
          : "none";
    }
  });
});

