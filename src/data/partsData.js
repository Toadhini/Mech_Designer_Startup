export const partsData = {
  head: [
    { name: "Light Head", attack: 0, armor: 5, speed: 20, weight: 15, energy: 10 },
    { name: "Medium Head", attack: 0, armor: 12, speed: 10, weight: 25, energy: 12 },
    { name: "Heavy Head", attack: 0, armor: 20, speed: 5, weight: 35, energy: 15 },
  ],
  leftShoulder: [
    { name: "Light Left Shoulder", attack: 0, armor: 5, speed: 20, weight: 15, energy: 10 },
    { name: "Medium Left Shoulder", attack: 0, armor: 12, speed: 10, weight: 25, energy: 12 },
    { name: "Heavy Left Shoulder", attack: 0, armor: 20, speed: 5, weight: 35, energy: 15 },
  ],
  rightShoulder: [
    { name: "Light Right Shoulder", attack: 0, armor: 5, speed: 20, weight: 15, energy: 10 },
    { name: "Medium Right Shoulder", attack: 0, armor: 12, speed: 10, weight: 25, energy: 12 },
    { name: "Heavy Right Shoulder", attack: 0, armor: 20, speed: 5, weight: 35, energy: 15 },
  ],
  leftHand: [
    { name: "Shotgun", attack: 22, armor: 0, speed: -5, weight: 18, energy: 12 },
    { name: "Sword", attack: 28, armor: 5, speed: 10, weight: 12, energy: 5 },
    { name: "Machine Gun", attack: 18, armor: 0, speed: 0, weight: 20, energy: 15 },
    { name: "Sub-Machine Gun", attack: 12, armor: 0, speed: 8, weight: 10, energy: 10 },
    { name: "Heavy Machine Gun", attack: 30, armor: 0, speed: -10, weight: 35, energy: 25 },
    { name: "Rocket Launcher", attack: 40, armor: 0, speed: -15, weight: 40, energy: 30 },
    { name: "Plasma Cannon", attack: 50, armor: 0, speed: -20, weight: 45, energy: 45 },
    { name: "Sniper Rifle", attack: 35, armor: 0, speed: -5, weight: 22, energy: 18 },
  ],
  rightHand: [
    { name: "Shotgun", attack: 22, armor: 0, speed: -5, weight: 18, energy: 12 },
    { name: "Sword", attack: 28, armor: 5, speed: 10, weight: 12, energy: 5 },
    { name: "Machine Gun", attack: 18, armor: 0, speed: 0, weight: 20, energy: 15 },
    { name: "Sub-Machine Gun", attack: 12, armor: 0, speed: 8, weight: 10, energy: 10 },
    { name: "Heavy Machine Gun", attack: 30, armor: 0, speed: -10, weight: 35, energy: 25 },
    { name: "Rocket Launcher", attack: 40, armor: 0, speed: -15, weight: 40, energy: 30 },
    { name: "Plasma Cannon", attack: 50, armor: 0, speed: -20, weight: 45, energy: 45 },
    { name: "Grenade Launcher", attack: 35, armor: 0, speed: -12, weight: 32, energy: 22 },
  ],
  body: [
    { name: "Light Body", attack: 0, armor: 25, speed: 25, weight: 25, energy: 15 },
    { name: "Medium Body", attack: 0, armor: 35, speed: 20, weight: 35, energy: 25 },
    { name: "Heavy Body", attack: 0, armor: 50, speed: 10, weight: 50, energy: 30 },
  ],
  core: [
    { name: "Energy Core", attack: 0, armor: 0, speed: 10, weight: 15, energy: 10 },
    { name: "Fusion Core", attack: 0, armor: 0, speed: 20, weight: 20, energy: 25 },
    { name: "Plasma Core", attack: 0, armor: 0, speed: 30, weight: 20, energy: 40 },
  ],
  legs: [
    { name: "Light Legs", attack: 0, armor: 10, speed: 30, weight: 20, energy: 10 },
    { name: "Medium Legs", attack: 0, armor: 20, speed: 20, weight: 30, energy: 15 },
    { name: "Reverse Joint", attack: 0, armor: 15, speed: 35, weight: 25, energy: 20 },
    { name: "Heavy Legs", attack: 0, armor: 35, speed: 10, weight: 45, energy: 20 },
    { name: "Quad Legs", attack: 0, armor: 45, speed: 5, weight: 55, energy: 25 },
  ],
};

export function getPartByName(category, name) {
  const parts = partsData[category];
  if (!parts) return null;
  return parts.find((part) => part.name === name) || null;
}

export function calculateTotalStats(selectedParts) {
  const totals = { attack: 0, armor: 0, speed: 0, weight: 0, energy: 0 };

  Object.entries(selectedParts).forEach(([category, partName]) => {
    if (partName) {
      const part = getPartByName(category, partName);
      if (part) {
        totals.attack += part.attack;
        totals.armor += part.armor;
        totals.speed += part.speed;
        totals.weight += part.weight;
        totals.energy += part.energy;
      }
    }
  });

  return totals;
}
