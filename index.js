// import fetch from 'node-fetch';
const axios = require('axios');
console.log("poop");

// // https://weatherdbi.herokuapp.com/data/weather/london

// function convertToJson(res) {
//     let jsonResponse = res.json();
//     if (res.ok) {
//       return jsonResponse;
//     } else {
//       throw { name: "services error", message: jsonResponse };
//     }
//   }
// function getData(){


// let weather = fetch("https://film-watcher.herokuapp.com/movies").then(convertToJson).then((data) => data);
// console.log(weather, "weather log");
// return weather;
// }
// weather = getData()
// console.log(weather);

axios.get("https://weatherdbi.herokuapp.com/data/weather/london").then(response => {
console.log('resjponse', response.data)
})