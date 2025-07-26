// Set initial counts for messages and notifications
const data = {
  messages: 3,
  notifications: 5
};

// Function to update badges
function updateBadges() {
  const msgBadge = document.getElementById("message-badge");
  const notifBadge = document.getElementById("notification-badge");

  if (msgBadge) {
    msgBadge.textContent = data.messages > 0 ? data.messages : '';
    msgBadge.style.display = data.messages > 0 ? 'inline-block' : 'none';
  }

  if (notifBadge) {
    notifBadge.textContent = data.notifications > 0 ? data.notifications : '';
    notifBadge.style.display = data.notifications > 0 ? 'inline-block' : 'none';
  }
}

// Function to handle card clicks
function setupCardClicks() {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const label = card.querySelector(".card-label");
      if (label) {
        alert(`Opening ${label.textContent.trim()}...`);
      }
    });
  });
}

// Initialize everything on DOM load
document.addEventListener("DOMContentLoaded", () => {
  updateBadges();
  setupCardClicks();
});
