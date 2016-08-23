var express      = require('express'),
    app          = express(),
    bodyParser   = require('body-parser'),
    port         = process.env.PORT || 27017
    databaseUrl  = 'mongodb://localhose:27017'

mongoose.connect(databaseUrl, function(err) {
  console.log('connected to the MONGODS')
})
