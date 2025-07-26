// Sample script to update notification and message badge counts
document.addEventListener('DOMContentLoaded', () => {
  // Simulate fetching data
  const messageCount = 3;
  const notificationCount = 5;

  const messageBadge = document.querySelector('#message-badge');
  const notificationBadge = document.querySelector('#notification-badge');

  if (messageBadge) {
    messageBadge.textContent = messageCount;
    messageBadge.style.display = messageCount > 0 ? 'inline-block' : 'none';
  }

  if (notificationBadge) {
    notificationBadge.textContent = notificationCount;
    notificationBadge.style.display = notificationCount > 0 ? 'inline-block' : 'none';
  }
});
