const BASE_URL_NEWS = 'https://newsapi.org/v2'; // News API base URL
const API_KEY_NEWS = '53024ef89c2e4cbe88770c003165f624'; // News API key
const BASE_URL_WEATHER = 'https://api.weatherapi.com/v1'; // Weather API base URL
const API_KEY_WEATHER = '93b808c40f8b45b6ac8200159243011'; // Weather API key
const BASE_URL_FINANCIAL = 'https://financialmodelingprep.com/api/v3'; // Financial Modeling Prep base URL
const API_KEY_FINANCIAL = 'QHiXtionOKwxRvzN7ff8qY1A0M8Dmq7f'; // Financial Modeling Prep API key

// Function to fetch weather data
export async function fetchWeather(city) {
  const endpoint = `/current.json?key=${API_KEY_WEATHER}&q=${city}`;
  try {
    const response = await fetch(BASE_URL_WEATHER + endpoint); // Fetch data from the Weather API
    const data = await response.json(); // Parse the response as JSON
    return data; // Return the weather data
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null; // Return null if there's an error
  }
}

// Function to fetch business news in the US
export async function fetchBusinessNews() {
  const endpoint = `/top-headlines?country=us&category=business&apiKey=${API_KEY_NEWS}`;
  try {
    const response = await fetch(BASE_URL_NEWS + endpoint); // Fetch data from the News API
    const data = await response.json(); // Parse the response as JSON
    return data.articles || []; // Return the articles
  } catch (error) {
    console.error('Error fetching business news:', error);
    return []; // Return an empty array if there's an error
  }
}

// Function to fetch financial data
export async function fetchFinancialData(query) {
  const endpoint = `/search-ticker?query=${query}&limit=10&exchange=NASDAQ&apikey=${API_KEY_FINANCIAL}`;
  try {
    const response = await fetch(BASE_URL_FINANCIAL + endpoint); // Fetch data from the Financial Modeling Prep API
    const data = await response.json(); // Parse the response as JSON
    return data; // Return the financial data
  } catch (error) {
    console.error('Error fetching financial data:', error);
    return []; // Return an empty array if there's an error
  }
}
