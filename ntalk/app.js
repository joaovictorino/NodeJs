var express = require('express');
var path = require('path');
var consign = require('consign');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

consign({})
  .include('models')
  .then('controllers')
  .then('routes')
  .into(app);

app.listen(3000, () => { 
  console.log("Ntalk no ar");
});