<template>
  <div class="weather-container">
    <div class="weather-card">
      <!-- Input for changing city -->
      <div class="city-input">
        <input 
          type="text" 
          v-model="city" 
          placeholder="Enter city" 
          @keyup.enter="getWeather"
        />
        <button @click="getWeather">Get Weather</button>
      </div>
      
      <!-- Weather data display -->
      <div v-if="weather">
        <h2>Weather in {{ weather.location.name }}</h2>
        <p><strong>Temperature:</strong> {{ weather.current.temp_c }} °C ({{ weather.current.temp_f }} °F)</p>
        <p><strong>Condition:</strong> 
          <img :src="'https:' + weather.current.condition.icon" alt="weather icon" /> 
          {{ weather.current.condition.text }}
        </p>
        <p><strong>Wind Speed:</strong> {{ weather.current.wind_mph }} mph</p>
        <p><strong>Humidity:</strong> {{ weather.current.humidity }}%</p>
        <p><strong>Visibility:</strong> {{ weather.current.vis_km }} km</p>
        <p><strong>Pressure:</strong> {{ weather.current.pressure_mb }} mb</p>
      </div>
      
      <!-- Loading state -->
      <div v-else class="loading">
        <p>Loading weather data...</p>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchWeather } from '../api';

export default {
  name: 'Weather',
  data() {
    return {
      city: 'London',  // Default city
      weather: null,   // Store weather data
    };
  },
  async created() {
    await this.getWeather();  // Fetch the weather data when the component is created
  },
  methods: {
    async getWeather() {
      this.weather = await fetchWeather(this.city);  // Fetch weather data for the current city
    },
  },
};
</script>

<style scoped>
/* Full page background */
.weather-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
  background-color: #e6f7ff; /* Light background color */
  margin: 0;
}

/* Weather card container */
.weather-card {
  padding: 30px;
  background-color: #ffffff;
  border-radius: 12px;
  max-width: 400px; /* Limit the card width */
  width: 100%;
  text-align: center;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.city-input {
  margin-bottom: 20px;
}

.city-input input {
  padding: 12px;
  margin-right: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 70%;
}

.city-input button {
  padding: 12px 20px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 25%;
}

.city-input button:hover {
  background-color: #45a049;
}

.weather-card img {
  max-width: 60px;
  height: auto;
  margin-bottom: 10px;
}

.weather-card h2 {
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: bold;
}

.weather-card p {
  font-size: 18px;
  margin: 8px 0;
}

.loading {
  text-align: center;
  font-size: 18px;
  color: #888;
}

/* Responsive design */
@media (max-width: 768px) {
  .weather-card {
    max-width: 100%;
    padding: 20px;
  }

  .city-input input, .city-input button {
    width: 100%;
    margin-bottom: 10px;
  }
}

@media (max-width: 480px) {
  .weather-card {
    max-width: 90%;
    padding: 15px;
  }

  .city-input input, .city-input button {
    font-size: 14px;
  }
}
</style>
