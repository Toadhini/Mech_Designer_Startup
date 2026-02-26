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
    { name: "Shotgun", attack: 0, armor: 0, speed: 0, weight: 0, energy: 0 },
    { name: "Sword", attack: 0, armor: 0, speed: 0, weight: 0, energy: 0 },
    { name: "Machine Gun", attack: 0, armor: 0, speed: 0, weight: 0, energy: 0 },
    { name: "Sub-Machine Gun", attack: 0, armor: 0, speed: 0, weight: 0, energy: 0 },
    { name: "Heavy Machine Gun", attack: 0, armor: 0, speed: 0, weight: 0, energy: 0 },
    { name: "Rocket Launcher", attack: 0, armor: 0, speed: 0, weight: 0, energy: 0 },
    { name: "Plasma Cannon", attack: 0, armor: 0, speed: 0, weight: 0, energy: 0 },
    { name: "Sniper Rifle", attack: 0, armor: 0, speed: 0, weight: 0, energy: 0 },
  ],
  rightHand: [
    { name: "Shotgun", attack: 0, armor: 0, speed: 0, weight: 0, energy: 0 },
    { name: "Sword", attack: 0, armor: 0, speed: 0, weight: 0, energy: 0 },
    { name: "Machine Gun", attack: 0, armor: 0, speed: 0, weight: 0, energy: 0 },
    { name: "Sub-Machine Gun", attack: 0, armor: 0, speed: 0, weight: 0, energy: 0 },
    { name: "Heavy Machine Gun", attack: 0, armor: 0, speed: 0, weight: 0, energy: 0 },
    { name: "Rocket Launcher", attack: 0, armor: 0, speed: 0, weight: 0, energy: 0 },
    { name: "Plasma Cannon", attack: 0, armor: 0, speed: 0, weight: 0, energy: 0 },
    { name: "Grenade Launcher", attack: 0, armor: 0, speed: 0, weight: 0, energy: 0 },
  ],
  body: [
    { name: "Light Body", attack: 0, armor: 0, speed: 0, weight: 0, energy: 0 },
    { name: "Medium Body", attack: 0, armor: 0, speed: 0, weight: 0, energy: 0 },
    { name: "Heavy Body", attack: 0, armor: 0, speed: 0, weight: 0, energy: 0 },
  ],
  core: [
    { name: "Energy Core", attack: 0, armor: 0, speed: 0, weight: 0, energy: 0 },
    { name: "Fusion Core", attack: 0, armor: 0, speed: 0, weight: 0, energy: 0 },
    { name: "Plasma Core", attack: 0, armor: 0, speed: 0, weight: 0, energy: 0 },
  ],
  legs: [
    { name: "Medium Legs", attack: 0, armor: 0, speed: 0, weight: 0, energy: 0 },
    { name: "Reverse Joint", attack: 0, armor: 0, speed: 0, weight: 0, energy: 0 },
    { name: "Heavy Legs", attack: 0, armor: 0, speed: 0, weight: 0, energy: 0 },
    { name: "Quad Legs", attack: 0, armor: 0, speed: 0, weight: 0, energy: 0 },
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
