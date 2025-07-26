// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Navigation handling
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const sectionId = link.getAttribute("data-section");
      loadSection(sectionId);
    });
  });

  function loadSection(sectionId) {
    const sections = document.querySelectorAll(".section");
    sections.forEach((sec) => sec.classList.add("hidden"));

    const target = document.getElementById(sectionId);
    if (target) target.classList.remove("hidden");
  }

  // Sample notifications
  const notifyBtn = document.getElementById("notifyBtn");
  if (notifyBtn) {
    notifyBtn.addEventListener("click", () => {
      alert("🔔 You have 3 new rewards and 1 message!");
    });
  }

  // Daily reward logic
  const rewardBtn = document.getElementById("dailyRewardBtn");
  if (rewardBtn) {
    rewardBtn.addEventListener("click", () => {
      rewardBtn.disabled = true;
      rewardBtn.innerText = "Reward Claimed!";
      alert("You received +100 gold and +10 power!");
    });
  }

  // Simulate battle (simple)
  const battleBtn = document.getElementById("battleBtn");
  if (battleBtn) {
    battleBtn.addEventListener("click", () => {
      const win = Math.random() > 0.4;
      if (win) {
        alert("🎉 You defeated the boss! +1 Trophy");
      } else {
        alert("💀 You lost the battle. Train more to win!");
      }
    });
  }
});
