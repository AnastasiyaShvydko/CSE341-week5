const  express  = require("express");
const swagger = require('./routes/swagger_route');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require ('passport');
const MongoStore = require('connect-mongo');
const getClient = require('./connect');
const client = getClient.client;
const dotenv = require('dotenv');

dotenv.config();






require('./passport')(passport);
const app = express();
app
.set('view engine', 'ejs')
.use(bodyParser.json())
.use((req, res, next) => {
 res.setHeader('Access-Control-Allow-Origin', '*');
 next();
})
.use('/public', express.static('public'))
 .use(express.static('form'))
//Session , has to be above passport
.use(session({
    secret: 'keyboard cat',
    cookie: {
      maxAge: 60000 * 60 * 24, //1Sec * 1H * 24 = 1 Day
      
  },
  resave: true,
  saveUninitialized: true,
    // store: new MongoStore (
    //   { client: client.connect() }),
    
  }))
//Passport
.use(passport.initialize())
.use(passport.authenticate('session'))
.use('/', require('./routes/index'))
.use('/auth', require('./routes/auth'))
.use('/api-docs', swagger);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Web Server is listening at port ${port}`);
});