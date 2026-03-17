const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const uuid = require('uuid');
const bcrypt = require('bcryptjs');

const app = express();
const port = process.argv[2] || 4000;

// JSON body parsing middleware
app.use(express.json());
app.use(cookieParser());

// Serve static frontend files from the 'public' directory (for production on AWS)
app.use(express.static('public'));

// In-memory user storage (will be replaced with DB later)
const users = [];

// User helper functions
async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);
  const user = {
    email: email,
    password: passwordHash,
  };
  users.push(user);
  return user;
}

function getUser(field, value) {
  if (value) {
    return users.find((user) => user[field] === value);
  }
  return null;
}

// Cookie helper functions
function setAuthCookie(res, user) {
  user.token = uuid.v4();
  res.cookie('token', user.token, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

function clearAuthCookie(res, user) {
  delete user.token;
  res.clearCookie('token');
}

// Registration endpoint
app.post('/api/auth', async (req, res) => {
  if (await getUser('email', req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);
    setAuthCookie(res, user);
    res.send({ email: user.email });
  }
});

// Login endpoint
app.put('/api/auth', async (req, res) => {
  const user = await getUser('email', req.body.email);
  if (user && (await bcrypt.compare(req.body.password, user.password))) {
    setAuthCookie(res, user);
    res.send({ email: user.email });
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

// Logout endpoint
app.delete('/api/auth', async (req, res) => {
  const token = req.cookies['token'];
  const user = await getUser('token', token);
  if (user) {
    clearAuthCookie(res, user);
  }
  res.send({});
});

// GetMe endpoint
app.get('/api/user/me', async (req, res) => {
  const token = req.cookies['token'];
  const user = await getUser('token', token);
  if (user) {
    res.send({ email: user.email });
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

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
