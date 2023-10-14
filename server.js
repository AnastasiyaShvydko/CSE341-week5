const  express  = require("express");
const swagger = require('./routes/swagger_route');
const bodyParser = require('body-parser');


const app = express();
app
.use(bodyParser.json())
.use((req, res, next) => {
 res.setHeader('Access-Control-Allow-Origin', '*');
 next();
})
.use('/', require('./routes'))
.use('/api-docs', swagger);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Web Server is listening at port ${port}`);
});