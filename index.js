const express = require('express');

const app = express();
//Require http
const http = require('http')

//Require config
const config = require('./config')
const route = require('./route/students')
    
//Creating the server
const server = http.createServer(app)

//Provide the port
const port = config.PORT

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// call stidents route
app.use('/', route)

//Listening onto the server
server.listen(port,()=>{
    console.log(`Server running on port ${port}...`)
})
