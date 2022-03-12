// const data = fetch("https://restcountries.com/v3.1/name/Turkey");
// console.log(data);

// fetch("https://restcountries.com/v3.1/name/Turkey").then(response => {
//     console.log(response);
//     return response.json()
// }).then(data => {
//     console.log(data);
//     console.log(data[0].capital, data[0].name.common);
// });

const getCountry = async (countryName) => {
  const response = await fetch("https://restcountries.com/v3.1/name/Turkey");
  const data = await response.json();
  console.log(data);
  console.log(data[0].capital, data[0].name.common);
};

getCountry("Turkey");
