// OpenShift sample Node application
var express = require('express'),
    app     = express();

const path = require('path');
    //morgan  = require('morgan');
    
//Object.assign=require('object-assign')

//app.engine('html', require('ejs').renderFile);
//app.use(morgan('combined'))


app.use(express.static(__dirname + '/dist/angular-tour-of-heroes'));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
    mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL,
    mongoURLLabel = "";

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;
