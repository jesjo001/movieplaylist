const express = require('express');
const serverStatic = require('server-static');
const path = require('path');

const app = express();

//config static folder


app.use('/', serverStatic(path.join(__dirname, '/dist')))

//this * route is to serve project on different routes except root '/'
app.get(/.*/, function(req, res){
    res.sendFile(path.join(__dirname, '/dist/index.html'));
})

const port = process.env.PORT || 8080;
app.listen(port)
console.log(`app is listening on port ${port}`)
