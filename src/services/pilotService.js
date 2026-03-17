// Pilot Service - calls backend endpoint which uses D&D 5e API

// Generate a complete pilot profile by calling our backend service
export async function generatePilotProfile(pilotName = 'Unknown Pilot') {
  try {
    const response = await fetch('/api/pilot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ pilotName }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate pilot profile');
    }

    return await response.json();
  } catch (error) {
    console.error('Error generating pilot profile:', error);
    
    // Fallback if backend fails
    const rollStat = () => {
      const rolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1);
      rolls.sort((a, b) => a - b);
      return rolls[1] + rolls[2] + rolls[3];
    };

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
      pilotClass: { name: 'Freelancer', description: 'A versatile pilot with balanced skills' },
      apiSource: false,
    };
  }
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
