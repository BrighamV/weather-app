const axios = require('axios');
var http = require('http');
const port = 3000;
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());



axios.get("https://weatherdbi.herokuapp.com/data/weather/london").then(response => {
    let data = JSON.stringify(response.data);

    http.createServer(function (req, res) {
     
        res.write(data); //write a response to the client
        res.end(); //end the response
      }).listen(port); //the server object listens on port 8080

// console.log('resjponse', response.data)
})




//create a server object:


// document.querySelector(".data").innerHTML = data;

// console.log("hi");