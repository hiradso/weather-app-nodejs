const axios = require("axios");

const baseURL = "http://api.weatherstack.com/current";

const geocode = async (location) => {
  try {
    const {
      data: {
        location: { lat, lon, region },
        current: { temperature, humidity, feelslike },
      },
    } = await axios.get(baseURL, {
      params: {
        access_key: "7949f937d13236b41de511a03906e3b9",
        query: location,
      },
    });
    return { lat, lon, temperature, humidity, feelslike, region };
  } catch (error) {
    return error;
  }
};

module.exports = geocode;
