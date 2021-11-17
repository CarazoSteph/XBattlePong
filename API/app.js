
const express = require('express');
const routes = require('./src/routes');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.all('/*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin","*");   
    res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers","X-Requested-With,Content-type,Accept,X-Access-Token,X-Key");   
    if (req.method==='GET' || req.method==='DELETE' || req.method === 'POST' || req.method === 'PUT'){
        next();  
    }   
});

app.use('/', routes);

app.listen(3005, () => console.log('App listening on port 3005!'));

module.exports = {
    app
}