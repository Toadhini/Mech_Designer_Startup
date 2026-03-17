const express = require('express');
const path = require('path');

const app = express();
const port = process.argv[2] || 4000;

// JSON body parsing middleware
app.use(express.json());

// Serve static frontend files from the 'dist' folder (after build)
app.use(express.static(path.join(__dirname, '..', 'dist')));

// API endpoint to generate pilot profile using D&D 5e API
app.post('/api/pilot', async (req, res) => {
  const { pilotName = 'Unknown Pilot' } = req.body;

  try {
    // Call D&D 5e API to get ability scores
    const response = await fetch('https://www.dnd5eapi.co/api/ability-scores');
    
    if (!response.ok) {
      throw new Error('Failed to fetch from D&D API');
    }

    const data = await response.json();
    const abilityScores = data.results;

    // Generate random stats using 4d6 drop lowest method
    const rollStat = () => {
      const rolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1);
      rolls.sort((a, b) => a - b);
      return rolls[1] + rolls[2] + rolls[3];
    };

    // Build stats object
    const stats = {};
    for (const ability of abilityScores) {
      stats[ability.name] = rollStat();
    }

    // Determine pilot class based on highest stat
    const classMap = {
      STR: { name: 'Assault Pilot', description: 'Excels in heavy combat and close-range engagements' },
      DEX: { name: 'Recon Pilot', description: 'Specializes in speed and precision strikes' },
      CON: { name: 'Tank Pilot', description: 'Built to withstand heavy damage and protect allies' },
      INT: { name: 'Tech Pilot', description: 'Master of mech systems and tactical analysis' },
      WIS: { name: 'Support Pilot', description: 'Expert in battlefield awareness and team coordination' },
      CHA: { name: 'Commander Pilot', description: 'Natural leader who inspires and directs squadmates' },
    };

    const highest = Object.entries(stats).reduce((max, current) =>
      current[1] > max[1] ? current : max
    );
    const pilotClass = classMap[highest[0]] || { name: 'Freelancer', description: 'A versatile pilot with balanced skills' };

    // Return the pilot profile
    res.json({
      name: pilotName,
      stats,
      pilotClass,
      apiSource: true,
    });

  } catch (error) {
    console.error('Error generating pilot:', error);
    
    // Fallback response if API fails
    const rollStat = () => {
      const rolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1);
      rolls.sort((a, b) => a - b);
      return rolls[1] + rolls[2] + rolls[3];
    };

    res.json({
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
    });
  }
});

// Catch-all route to serve frontend for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
