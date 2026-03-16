// D&D 5e API Service for generating pilot profiles
const DND_API_BASE = 'https://www.dnd5eapi.co/api';

// Fetch all ability score info from D&D API
export async function fetchAbilityScores() {
  try {
    const response = await fetch(`${DND_API_BASE}/ability-scores`);
    if (!response.ok) {
      throw new Error('Failed to fetch ability scores');
    }
    const data = await response.json();
    return data.results; // [{index: "str", name: "STR", url: "..."}, ...]
  } catch (error) {
    console.error('Error fetching ability scores:', error);
    return null;
  }
}

// Generate a random stat value (D&D style: 3-18 range, weighted toward middle)
function rollStat() {
  // Simulate rolling 4d6 and dropping the lowest
  const rolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1);
  rolls.sort((a, b) => a - b);
  return rolls[1] + rolls[2] + rolls[3]; // Sum top 3
}

// Determine pilot class/role based on their highest stat
function determinePilotClass(stats) {
  const statEntries = Object.entries(stats);
  const highest = statEntries.reduce((max, current) => 
    current[1] > max[1] ? current : max
  );

  const classMap = {
    STR: { name: 'Assault Pilot', description: 'Excels in heavy combat and close-range engagements' },
    DEX: { name: 'Recon Pilot', description: 'Specializes in speed and precision strikes' },
    CON: { name: 'Tank Pilot', description: 'Built to withstand heavy damage and protect allies' },
    INT: { name: 'Tech Pilot', description: 'Master of mech systems and tactical analysis' },
    WIS: { name: 'Support Pilot', description: 'Expert in battlefield awareness and team coordination' },
    CHA: { name: 'Commander Pilot', description: 'Natural leader who inspires and directs squadmates' },
  };

  return classMap[highest[0]] || { name: 'Freelancer', description: 'A versatile pilot with balanced skills' };
}

// Generate a complete pilot profile using D&D API
export async function generatePilotProfile(pilotName = 'Unknown Pilot') {
  const abilityScores = await fetchAbilityScores();
  
  if (!abilityScores) {
    // Fallback if API fails
    return {
      name: pilotName,
      stats: {
        STR: rollStat(),
        DEX: rollStat(),
        CON: rollStat(),
        INT: rollStat(),
        WIS: rollStat(),
        CHA: rollStat(),
      },
      pilotClass: determinePilotClass({ STR: 10, DEX: 10, CON: 10, INT: 10, WIS: 10, CHA: 10 }),
      apiSource: false,
    };
  }

  // Build stats object with rolled values
  const stats = {};
  for (const ability of abilityScores) {
    stats[ability.name] = rollStat();
  }

  // Determine pilot class based on highest stat
  const pilotClass = determinePilotClass(stats);

  return {
    name: pilotName,
    stats,
    pilotClass,
    apiSource: true,
  };
}

// Calculate a stat modifier (D&D style)
export function getModifier(statValue) {
  return Math.floor((statValue - 10) / 2);
}

// Format modifier for display (+2, -1, etc.)
export function formatModifier(statValue) {
  const mod = getModifier(statValue);
  return mod >= 0 ? `+${mod}` : `${mod}`;
}
