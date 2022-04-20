



// const options = {
//     method: "GET",
//     headers: {
//     //   "Access-Control-Allow-Origin":  "https://localhost:3000",
//       "Content-Type": "application/json",
//     //   Authorization: `Bearer ${token}`,

//     }
//   };




// fetch('http://localhost:3000', options)
// .then(response => response.json())
// .then(data => console.log(data))

let city = "kaysville";
let more = [];

let data = fetch(`https://weatherdbi.herokuapp.com/data/weather/${city}`)
.then(response => response.json())
.then(stuff => more = stuff)



console.log(data);
document.querySelector(".data").innerHTML = data