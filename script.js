// XP progress animation
document.addEventListener("DOMContentLoaded", () => {
  const xpBar = document.getElementById("xp-fill");
  const xpPercent = parseInt(xpBar.getAttribute("data-xp"));
  let width = 0;

  const fill = () => {
    if (width >= xpPercent) return;
    width++;
    xpBar.style.width = width + "%";
    requestAnimationFrame(fill);
  };

  requestAnimationFrame(fill);
});

// Badge update
document.addEventListener("DOMContentLoaded", () => {
  const messagesBadge = document.getElementById("messages-badge");
  const notificationsBadge = document.getElementById("notifications-badge");

  const messageCount = 4;
  const notificationCount = 3;

  if (messageCount > 0) {
    messagesBadge.textContent = messageCount;
    messagesBadge.style.display = "inline-block";
  }

  if (notificationCount > 0) {
    notificationsBadge.textContent = notificationCount;
    notificationsBadge.style.display = "inline-block";
  }
});
