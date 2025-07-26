// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Handle card clicks
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      const cardId = card.id;

      switch (cardId) {
        case "boss":
          alert("Entering Boss Fight Arena...");
          break;
        case "pvp":
          alert("Searching for PvP Opponent...");
          break;
        case "shop":
          alert("Opening Game Shop...");
          break;
        case "rewards":
          alert("Claim your Daily Rewards!");
          break;
        default:
          alert("Coming soon...");
      }
    });
  });

  // Sample function to update coins/gems dynamically
  function updateStats(coins, gems) {
    document.getElementById("coins-count").textContent = coins;
    document.getElementById("gems-count").textContent = gems;
  }

  // Simulate stat update
  setTimeout(() => {
    updateStats(5300, 250);
  }, 1000);

  // Example of updating notification count (for rewards)
  const rewardsIcon = document.getElementById("rewards-icon");
  const rewardsCount = rewardsIcon.querySelector(".count");

  function updateRewardNotification(newCount) {
    rewardsCount.textContent = newCount;
    rewardsIcon.classList.add("notify");
    setTimeout(() => {
      rewardsIcon.classList.remove("notify");
    }, 1500);
  }

  // Simulate new reward after 3 sec
  setTimeout(() => {
    updateRewardNotification(3);
  }, 3000);
});
