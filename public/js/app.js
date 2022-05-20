const searchText = document.querySelector(".search-country-text");
const apiResult = document.querySelector(".api-result");
const formSearch = document.querySelector(".form-search");

formSearch.addEventListener("submit", (event) => {
  event.preventDefault();
  if (searchText.value) {
    const locationValue = searchText.value;
    fetch(`http://localhost:3000/weather?location=${locationValue}`)
      .then((response) =>
        response.json().then((response) => {
          console.log(Object.keys(response).length);
          const { lat, lon, temperature, feelslike, humidity, region } =
            response;
          apiResult.textContent = `The region is ${region}. Latitude is ${lat} and Longitude is ${lon} and humidity is ${humidity} and it feels like ${feelslike} but the real temperature is ${temperature}`;
        })
      )
      .catch((error) => (apiResult.textContent = error));
    searchText.value = "";
  } else {
    apiResult.textContent =
      "You must enter country to search weather information";
  }
});
