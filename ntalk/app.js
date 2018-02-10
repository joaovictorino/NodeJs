const express = require('express');
const path = require('path');
//const load = require('express-load');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set(expressSession());
app.set(bodyParser.urlencoded({ extended: true }));
app.set(bodyParser.json());
app.set(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//load('controllers')
//  .then('routes')
//  .into(app);

var home = require('./routes/home');
var contatos = require('./routes/contatos');

app.use('/', home);
app.use('/contatos', contatos);

app.listen(3000, () => { 
  console.log("Ntalk no ar");
});