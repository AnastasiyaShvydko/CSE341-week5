const { ObjectId } = require('mongodb');
const getClient = require('../connect');
const client = getClient.client;

const getPlanets = async (req,res)=>{
    await client.connect();
    const getPlanets = await client
    .db('planets')
    .collection('planets')
    .find();

const resultArray = await getPlanets.toArray();
res.send(resultArray);
//res.send("Anton")


}

const getPlanetById = async (req,res)=>{
    const planetId = new ObjectId(req.params.id);

    await client.connect();
    const getPlanets = await client
    .db('planets')
    .collection('planets')
    .find({_id: planetId});

const resultArray = await getPlanets.toArray();
res.send(resultArray);
//res.send("Anton")


}


module.exports = { getPlanets,getPlanetById }