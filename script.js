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

// Badge update example (you can fetch real data if needed)
document.addEventListener("DOMContentLoaded", () => {
  const messagesBadge = document.getElementById("messages-badge");
  const notificationsBadge = document.getElementById("notifications-badge");

  // Sample values (replace with actual logic or fetched values)
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
