// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Add active class on card hover
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      card.classList.add("active-card");
    });
    card.addEventListener("mouseout", () => {
      card.classList.remove("active-card");
    });
  });

  // Simulate real-time stat count animation
  const animateCount = (element, target, duration) => {
    let start = 0;
    const step = Math.ceil(target / (duration / 50));
    const update = () => {
      if (start < target) {
        start += step;
        if (start > target) start = target;
        element.textContent = start;
        setTimeout(update, 50);
      }
    };
    update();
  };

  // Initialize animated stats (adjust targets as needed)
  animateCount(document.getElementById("power-count"), 1240, 1000);
  animateCount(document.getElementById("level-count"), 56, 800);
  animateCount(document.getElementById("skill-count"), 98, 900);

  // Glow flicker animation on player stat icons
  const glowingIcons = document.querySelectorAll(".stat-icon");
  glowingIcons.forEach((icon) => {
    icon.classList.add("glow-animation");
  });
});
