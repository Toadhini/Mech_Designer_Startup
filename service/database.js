const { MongoClient, ObjectId } = require('mongodb');
const config = require('./dbConfig.json');

const userName = config.userName;
const password = config.password;
const hostname = config.hostname;

if (!hostname) {
  throw new Error('Database not configured. Set hostname, userName, and password in dbConfig.json');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;
const client = new MongoClient(url);
const db = client.db('mechdesigner');

const userCollection = db.collection('users');
const pilotCollection = db.collection('pilots');
const mechCollection = db.collection('mechs');

(async function testConnection() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (ex) {
    console.error(`Unable to connect to database: ${ex.message}`);
    process.exit(1);
  }
})();

// User functions
async function createUser(email, password) {
  const user = {
    email: email,
    password: password,
    token: null,
  };
  await userCollection.insertOne(user);
  return user;
}

async function getUser(field, value) {
  if (!value) return null;
  return userCollection.findOne({ [field]: value });
}

async function updateUserToken(email, token) {
  await userCollection.updateOne({ email }, { $set: { token } });
}

async function clearUserToken(email) {
  await userCollection.updateOne({ email }, { $set: { token: null } });
}

// Pilot functions
async function savePilot(userEmail, pilot) {
  pilot.userEmail = userEmail;
  pilot.createdAt = new Date();
  await pilotCollection.insertOne(pilot);
  return pilot;
}

async function getPilots(userEmail) {
  return pilotCollection.find({ userEmail }).toArray();
}

async function getPilotById(id) {
  return pilotCollection.findOne({ _id: new ObjectId(id) });
}

async function deletePilot(id, userEmail) {
  return pilotCollection.deleteOne({ _id: new ObjectId(id), userEmail });
}

// Mech functions
// Save a new mech to the database
async function saveMech(mech) {
  mech.createdAt = new Date();
  await mechCollection.insertOne(mech);
  return mech;
}

// Get all mechs (for the browse page)
async function getAllMechs() {
  return mechCollection.find({}).sort({ createdAt: -1 }).toArray();
}

// Get mechs belonging to a specific user
async function getMechsByUser(username) {
  return mechCollection.find({ username }).sort({ createdAt: -1 }).toArray();
}

// Get a single mech by its ID
async function getMechById(id) {
  return mechCollection.findOne({ _id: new ObjectId(id) });
}

// Delete a mech (only if the user owns it)
async function deleteMech(id, username) {
  return mechCollection.deleteOne({ _id: new ObjectId(id), username });
}

module.exports = {
  createUser,
  getUser,
  updateUserToken,
  clearUserToken,
  savePilot,
  getPilots,
  getPilotById,
  deletePilot,
  saveMech,
  getAllMechs,
  getMechsByUser,
  getMechById,
  deleteMech,
};
