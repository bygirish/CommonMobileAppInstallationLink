const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
var request = require('request');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {

  var androidOS = 'Android';
  var iosOS = 'iPhone'

	//res.send(req.headers['user-agent']);
  
  if(req.headers['user-agent'].includes(androidOS)){
    res.redirect('https://play.google.com/store/apps/details?id=com.employwise.ggs.employwise&hl=en_IN');
    //res.send('android');

  }
  else if(req.headers['user-agent'].includes(iosOS)){

    res.redirect('https://itunes.apple.com/in/app/employwise/id1191418553?mt=8');
    //res.send('iPhone');
  }
  else{
    res.send('other os');
  }

});

app.listen(3000, () => console.log('server started'));