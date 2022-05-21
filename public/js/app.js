const searchText = document.querySelector(".search-country-text");
const apiResult = document.querySelector(".api-result");
const formSearch = document.querySelector(".form-search");
const weatherIcon = document.querySelector(".weather-icon");
const spinnerLoader = document.querySelector(".spinner-border");

formSearch.addEventListener("submit", (event) => {
  event.preventDefault();
  spinnerLoader.classList.remove("d-none");
  if (searchText.value) {
    const locationValue = searchText.value;
    setTimeout(() => {
      spinnerLoader.classList.add("d-none");
      fetch(`/weather?location=${locationValue}`)
        .then((response) =>
          response.json().then((response) => {
            console.log(Object.keys(response).length);
            const {
              lat,
              lon,
              temperature,
              feelslike,
              humidity,
              region,
              weather_icons,
            } = response;
            apiResult.textContent = `The region is ${region}. Latitude is ${lat} and Longitude is ${lon} and humidity is ${humidity} and it feels like ${feelslike} but the real temperature is ${temperature}`;
            weatherIcon.classList.remove("d-none");
            weatherIcon.src = weather_icons[0];
          })
        )
        .catch((error) => (apiResult.textContent = error));
    }, 1500);
    searchText.value = "";
  } else {
    apiResult.textContent =
      "You must enter country to search weather information";
  }
});
