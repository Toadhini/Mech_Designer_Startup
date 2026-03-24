const { MongoClient } = require('mongodb');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!hostname) {
  throw new Error('Database not configured. Set MONGOUSER, MONGOPASSWORD, and MONGOHOSTNAME environment variables.');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;
const client = new MongoClient(url);
const db = client.db('mechdesigner');

const userCollection = db.collection('users');
const pilotCollection = db.collection('pilots');

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
  const { ObjectId } = require('mongodb');
  return pilotCollection.findOne({ _id: new ObjectId(id) });
}

async function deletePilot(id, userEmail) {
  const { ObjectId } = require('mongodb');
  return pilotCollection.deleteOne({ _id: new ObjectId(id), userEmail });
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
};
