//Location api from geo-db rapidapi.com
export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "aae490fc4amsh58bbc158e94a85fp158289jsnfb43ca8c9330",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo"; //url endpoint for fetching the cities 

//Weather api and key from openweathermap.org
export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5"; //url endpoint for fetching current weather and day forecasting
export const WEATHER_API_KEY = "5f081ef603b57df01690657ef1c6d4cc";

//News api key from newsapi.org
export const NEWS_API_KEY = "7d3bb61252064a1b82860e8f5f6fa1b9"
