const dotenv = require('dotenv');

dotenv.config();

const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.uri);

const { ObjectId } = require('mongodb');

module.exports = { client };