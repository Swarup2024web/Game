// Heroes and Villains Data
const heroes = [
  {
    name: "Lord Rama",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Rama_with_arrows.jpg/220px-Rama_with_arrows.jpg",
    power: 80,
    speed: 70
  },
  {
    name: "Hanuman",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Hanuman_Sankat_Mochan.jpg/220px-Hanuman_Sankat_Mochan.jpg",
    power: 90,
    speed: 60
  },
  {
    name: "Arjuna",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Arjuna_fighting.jpg/220px-Arjuna_fighting.jpg",
    power: 75,
    speed: 80
  },
  {
    name: "Spider-Man",
    img: "https://upload.wikimedia.org/wikipedia/en/0/0c/Spiderman50.jpg",
    power: 70,
    speed: 90
  },
  {
    name: "Iron Man",
    img: "https://upload.wikimedia.org/wikipedia/en/e/e0/Iron_Man_bleeding_edge.jpg",
    power: 85,
    speed: 75
  }
];

const villains = [
  {
    name: "Ravana",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Ravana_Museum_Sri_Lanka.jpg/220px-Ravana_Museum_Sri_Lanka.jpg",
    power: 85,
    speed: 65
  },
  {
    name: "Mahishasura",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Mahishasura_Mardini.jpg/220px-Mahishasura_Mardini.jpg",
    power: 90,
    speed: 50
  },
  {
    name: "Joker",
    img: "https://upload.wikimedia.org/wikipedia/en/9/98/Joker_%28DC_Comics_character%29.jpg",
    power: 60,
    speed: 80
  },
  {
    name: "Thanos",
    img: "https://upload.wikimedia.org/wikipedia/en/7/7e/Thanos_Infinity_4.png",
    power: 95,
    speed: 70
  }
];

// Variables
let selectedHero, selectedVillain;
let heroHealth = 100;
let villainHealth = 100;

// DOM Elements
const heroList = document.getElementById("hero-list");
const battlefield = document.getElementById("battlefield");
const controls = document.getElementById("controls");
const result = document.getElementById("result");

// Load hero cards
heroes.forEach(hero => {
  const div = document.createElement("div");
  div.className = "hero-card";
  div.innerHTML = `<img src="${hero.img}" alt="${hero.name}"><h4>${hero.name}</h4>`;
  div.onclick = () => startBattle(hero);
  heroList.appendChild(div);
});

// Start battle
function startBattle(hero) {
  selectedHero = hero;
  selectedVillain = villains[Math.floor(Math.random() * villains.length)];
  heroHealth = 100;
  villainHealth = 100;

  document.getElementById("hero-name").textContent = hero.name;
  document.getElementById("hero-img").src = hero.img;
  document.getElementById("villain-name").textContent = selectedVillain.name;
  document.getElementById("villain-img").src = selectedVillain.img;

  updateHealthBars();

  document.querySelector(".character-selection").classList.add("hidden");
  battlefield.classList.remove("hidden");
  controls.classList.remove("hidden");
}

// Attack
function attack() {
  const heroDamage = getRandomDamage(selectedHero.power);
  const villainDamage = getRandomDamage(selectedVillain.power);

  villainHealth -= heroDamage;
  if (villainHealth <= 0) {
    villainHealth = 0;
    endGame("🎉 Victory! You defeated " + selectedVillain.name + "!");
    return;
  }

  setTimeout(() => {
    heroHealth -= villainDamage;
    if (heroHealth <= 0) {
      heroHealth = 0;
      endGame("💀 Defeat! " + selectedVillain.name + " overpowered you.");
    }
    updateHealthBars();
  }, 500);

  updateHealthBars();
}

// Defend
function defend() {
  const reducedDamage = Math.floor(getRandomDamage(selectedVillain.power) / 2);
  heroHealth -= reducedDamage;
  if (heroHealth <= 0) {
    heroHealth = 0;
    endGame("💀 Defeat! " + selectedVillain.name + " crushed you.");
  }
  updateHealthBars();
}

// Damage calculator
function getRandomDamage(power) {
  return Math.floor(Math.random() * (power / 2)) + 10;
}

// Update health bars
function updateHealthBars() {
  document.getElementById("hero-health").style.width = `${heroHealth}%`;
  document.getElementById("villain-health").style.width = `${villainHealth}%`;
}

// End game
function endGame(message) {
  document.getElementById("result-message").textContent = message;
  controls.classList.add("hidden");
  result.classList.remove("hidden");
}

// Restart
function restart() {
  result.classList.add("hidden");
  battlefield.classList.add("hidden");
  document.querySelector(".character-selection").classList.remove("hidden");
}
