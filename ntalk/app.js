const express = require('express');
const path = require('path');
const consign = require('consign');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set(cookieParser('ntalk'));
app.set(expressSession());
app.set(bodyParser.json());
app.set(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

consign({})
  .include('controllers')
  .then('routes')
  .into(app);

app.listen(3000, () => { 
  console.log("Ntalk no ar");
});