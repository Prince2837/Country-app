let searchBox = document.getElementById("searchbox");
let country = document.getElementById("country");
let searchBtn = document.getElementById("search");
let flagImg = document.getElementById("flag");
let mainname = document.getElementById("name");
let capital = document.getElementById("capital");
let continent = document.getElementById("continent");
let population = document.getElementById("population");
let language = document.getElementById("language");



searchBox.addEventListener("click", () => {
  const CountryData = async () => {
    let countryName = country.value;
    const apiUrl =` https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      const countryData = data[0];

      console.log(countryData);
      mainname.innerHTML = `${countryData.name.common}`;
              capital.innerHTML =`${countryData.capital}`;
              continent.innerHTML = `${countryData.continents}`;
              population.innerHTML = `${countryData.population}`;
              language.innerHTML=`${Object.values(countryData.languages)}`;


    } catch (error) {
      console.log("Error fetching country data:", error);
    }
  };


  CountryData();
});



