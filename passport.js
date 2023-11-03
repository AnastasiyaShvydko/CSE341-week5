const dotenv = require('dotenv');
dotenv.config();
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const getClient = require('./connect');
const client = getClient.client;




const { MongoClient } = require('mongodb');

module.exports = function(passport){
    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                callbackURL: '/auth/google/callback'
    }
    ,
    async (accessToken, refreshToken, profile, done) => {
        //console.log(profile)
    try{
        let newUser = {
            googleId :profile.id,
            displayName: profile.displayName,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            locale: profile.locale,
            picture: profile.photos[0].value,
            date: Date.now
             

        }
        await client.connect();
        let user = await client.db('planets')
        .collection('users')
        .find({ googleId: profile.id}).toArray();
        console.log(user, profile);
            if(user.length > 0){
                done(null, user);
                console.log("HELLO")
            }
            else{
                await client.db('planets').collection('users').insertOne(newUser);
                 done(null, newUser);
            }

            
    }
    catch(err){
        console.log(err)
    }
    
}))
   
      
    passport.serializeUser(function(user, done) {
        process.nextTick(function() {
         return done(null, { id: user.id, username: user.name, name: user.displayName });
        });
      });
      
      passport.deserializeUser(function(user, done) {
        process.nextTick(function() {
          return done(null, user);
        });
      });
}