const  express  = require("express");
const swagger = require('./routes/swagger_route');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require ('passport');



require('./passport')(passport);
const app = express();
app
.use(bodyParser.json())
.use((req, res, next) => {
 res.setHeader('Access-Control-Allow-Origin', '*');
 next();
})
//app.use(express.static(path.join(__dirname, 'public')))
//Session , has to be above passport
.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
  }))
//Passport
.use(passport.initialize())
app.use(passport.authenticate('session'))
.use('/', require('./routes/index'))
.use('/auth', require('./routes/auth'))
.use('/api-docs', swagger);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Web Server is listening at port ${port}`);
});