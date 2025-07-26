// Mythological Heroes and Villains Data
const heroes = [
  {
    name: "Arjuna",
    img: "assets/arjuna.png",
    maxHealth: 120,
    attack: 25,
    xp: 0,
    level: 1,
    loot: [],
  },
  {
    name: "Hanuman",
    img: "assets/hanuman.png",
    maxHealth: 150,
    attack: 20,
    xp: 0,
    level: 1,
    loot: [],
  },
  {
    name: "Durga",
    img: "assets/durga.png",
    maxHealth: 130,
    attack: 22,
    xp: 0,
    level: 1,
    loot: [],
  },
];

const villains = [
  { name: "Ravana", img: "assets/ravana.png", health: 100, attack: 20 },
  { name: "Mahishasura", img: "assets/mahishasura.png", health: 90, attack: 18 },
  { name: "Bakasura", img: "assets/bakasura.png", health: 80, attack: 15 },
];

let currentHero = null;
let currentVillain = null;
let heroHealth = 0;
let villainHealth = 0;

// Hero Selection
function selectHero(index) {
  currentHero = JSON.parse(JSON.stringify(heroes[index]));
  heroHealth = currentHero.maxHealth;
  document.getElementById("hero-section").classList.add("hidden");
  document.getElementById("battle-section").classList.remove("hidden");
  nextVillain();
  updateBattleUI();
}

// Next Villain Loader
function nextVillain() {
  if (villains.length === 0) {
    endGame("🏆 All demons defeated! You are victorious!");
    return;
  }
  currentVillain = villains.shift();
  villainHealth = currentVillain.health;
  logMessage(`⚔️ ${currentVillain.name} appears! Prepare for battle!`);
  updateBattleUI();
}

// Battle Handler
function attack() {
  if (!currentHero || !currentVillain) return;

  // Hero attacks villain
  let damageToVillain = currentHero.attack + Math.floor(Math.random() * 10);
  villainHealth -= damageToVillain;
  logMessage(`🗡️ ${currentHero.name} strikes ${currentVillain.name} for ${damageToVillain} damage.`);

  // Villain attacks hero
  let damageToHero = currentVillain.attack + Math.floor(Math.random() * 5);
  heroHealth -= damageToHero;
  logMessage(`💥 ${currentVillain.name} hits back for ${damageToHero} damage.`);

  if (villainHealth <= 0) {
    logMessage(`✅ ${currentVillain.name} defeated!`);
    gainXP(20);
    collectLoot(currentVillain.name);
    nextVillain();
  } else if (heroHealth <= 0) {
    endGame("💀 You have fallen in battle. Evil prevails.");
  }

  updateBattleUI();
}

// XP and Level System
function gainXP(amount) {
  currentHero.xp += amount;
  logMessage(`🔰 Gained ${amount} XP!`);
  if (currentHero.xp >= currentHero.level * 50) {
    currentHero.level++;
    currentHero.maxHealth += 20;
    currentHero.attack += 5;
    heroHealth = currentHero.maxHealth;
    logMessage(`🆙 Level up! You are now Level ${currentHero.level}`);
  }
}

// Loot System
function collectLoot(villainName) {
  const item = `Artifact of ${villainName}`;
  currentHero.loot.push(item);
  logMessage(`🎁 Loot found: ${item}`);
}

// UI Update
function updateBattleUI() {
  document.getElementById("hero-name").textContent = currentHero.name + ` (Lvl ${currentHero.level})`;
  document.getElementById("hero-img").src = currentHero.img;
  document.getElementById("hero-health").textContent = `Health: ${heroHealth}/${currentHero.maxHealth}`;

  document.getElementById("villain-name").textContent = currentVillain.name;
  document.getElementById("villain-img").src = currentVillain.img;
  document.getElementById("villain-health").textContent = `Health: ${villainHealth}/${currentVillain.health}`;

  document.getElementById("loot-list").innerHTML = currentHero.loot.map(item => `<li>${item}</li>`).join('');
}

// End Game
function endGame(message) {
  logMessage(message);
  document.getElementById("attack-btn").disabled = true;
  document.getElementById("result").textContent = message;
}

// Log Events
function logMessage(msg) {
  const logBox = document.getElementById("battle-log");
  logBox.innerHTML += `<p>${msg}</p>`;
  logBox.scrollTop = logBox.scrollHeight;
}
