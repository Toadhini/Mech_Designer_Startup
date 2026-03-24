// mechService.js - Frontend functions to interact with mech API endpoints

// Save a new mech to the database
// Calls: POST /api/mech
export async function saveMech(mech) {
  const response = await fetch('/api/mech', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(mech),
  });

  if (!response.ok) {
    throw new Error('Failed to save mech');
  }

  return response.json();
}

// Get all mechs (for browse page)
// Calls: GET /api/mechs
export async function getAllMechs() {
  const response = await fetch('/api/mechs');

  if (!response.ok) {
    throw new Error('Failed to fetch mechs');
  }

  return response.json();
}

// Get current user's mechs only
// Calls: GET /api/mechs/mine
export async function getMyMechs() {
  const response = await fetch('/api/mechs/mine');

  if (!response.ok) {
    throw new Error('Failed to fetch your mechs');
  }

  return response.json();
}

// Delete a mech by ID
// Calls: DELETE /api/mech/:id
export async function deleteMech(id) {
  const response = await fetch(`/api/mech/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete mech');
  }

  return response.json();
}
