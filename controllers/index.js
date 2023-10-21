const { ObjectId } = require('mongodb');
const createError = require ('http-errors')

const getClient = require('../connect');
const client = getClient.client;

const getPlanets = async (req,res,next)=>{
    try{
    await client.connect();
    const getPlanets = client
    .db('planets')
    .collection('planets')
    .find();
const resultArray = await getPlanets.toArray();
if(resultArray.length < 1){
    throw createError(404, "Not found")
}
res.send(resultArray);}
catch(error){
 
 next(error);

}



}

const getPlanetById = async (req,res,next)=>{
    try{
    const planetId = new ObjectId(req.params.id);
    await client.connect();
    const getPlanet = await client
    .db('planets')
    .collection('planets')
    .find({_id: planetId});
    //console.log(getPlanet)
const resultArray = await getPlanet.toArray();
if(resultArray.length == 0){
        throw createError(404, `Planet with id${planetId} not found`)
    }
res.send(resultArray);}
catch(error){
   
    next(error);
}



}

const postPlanet = async (req,res,next)=>{
    try{
    const newPlanet = req.body;

    await client.connect();
    const getPlanets = await client
    .db('planets')
    .collection('planets')
    .insertOne(newPlanet);
    if(!getPlanets.acknowledged){

        throw createError(404, `Something went wrong`)
        }
    
    res.send("New Planet was added");
}
    catch(error){

        next(error);
    }



}
const deletePlanet = async (req,res,next) => {
    try{
        const planetId = new ObjectId(req.params.id);
        await client.connect();
        const getPlanet = await client
        .db('planets')
        .collection('planets')
        .deleteOne({ _id: planetId});
    if(getPlanet.deletedCount == 0){

        throw createError(404, `Planet with id${planetId} not found`);

       }

    res.send(`Planet with id ${planetId} has been deleted`);}

    catch(error){
        next(error);
        }



}
const putPlanet = async (req,res,next)=>{
    try{
    const planetId = new ObjectId(req.params.id);   
    const newPlanet = req.body;

    await client.connect();
    const getPlanets = await client
    .db('planets')
    .collection('planets')
    .replaceOne({ _id: planetId}, newPlanet);
    console.log(getPlanets)
    if(getPlanets.matchedCount == 0){

        throw createError(404, `Planet with id${planetId} not found`)
        }
    
    res.send(`Info for planet with id ${planetId} was updated`);
}
    catch(error){

        next(error);
    }



}




module.exports = { getPlanets,getPlanetById,postPlanet,deletePlanet,putPlanet }