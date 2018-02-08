//IMPORTS / REQUIRES
const express = require('express');
const bodyParser = require ('body-parser');
const mc = require('./controllers/messages_controller');

//VARIABLES
const app = express();
const port = 3000;

//TOP LEVEL MIDDLEWARE
app.use(bodyParser.json());
app.use(express.static(__dirname + '../public/build'));

//ENDPOINTS
app.post('/api/messages', mc.create);
app.get('/api/messages', mc.read);
app.put('/api/messages/:id', mc.update);
app.delete('/api/messages/:id', mc.delete);

//LISTEN
app.listen(port, () => console.log(`listening on port ${port}!`));