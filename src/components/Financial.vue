<template>
  <div class="financial">
    <!-- Search Bar -->
    <div class="search-bar">
      <input
        type="text"
        v-model="query"
        placeholder="Search ticker symbol"
        @keyup.enter="getFinancialData"
      />
      <button @click="getFinancialData">Search</button>
    </div>

    <!-- API Description -->
    <div class="api-description">
      <p>
        The Financial Modeling Prep API provides detailed information about companies, including stock symbols, stock exchanges, and other financial data. It is commonly used for financial analysis and tracking stock market data.
      </p>
    </div>

    <!-- Suggestions Table -->
    <div class="suggestions-table">
      <h4>Suggested Searches</h4>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Company Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="suggestion in suggestions" :key="suggestion.symbol">
            <td>{{ suggestion.symbol }}</td>
            <td>{{ suggestion.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Note about keyword search -->
    <div class="search-note">
      <p><strong>Note:</strong> You can search stocks using any keyword, including the company's name or symbol, by typing the alphabet or keyword.</p>
    </div>

    <!-- Financial Cards -->
    <div class="cards-container" v-if="financialData.length > 0">
      <div v-for="stock in financialData" :key="stock.symbol" class="card">
        <h3>{{ stock.name }}</h3>
        <p><strong>Symbol:</strong> {{ stock.symbol }}</p>
        <p><strong>Currency:</strong> {{ stock.currency || 'N/A' }}</p>
        <p><strong>Stock Exchange:</strong> {{ stock.stockExchange || 'N/A' }}</p>
        <p><strong>Exchange Short Name:</strong> {{ stock.exchangeShortName || 'N/A' }}</p>
      </div>
    </div>
    <div v-else class="no-results">
      <p>No results found. Try a different search term.</p>
    </div>
  </div>
</template>

<script>
import { fetchFinancialData } from '../api';

export default {
  name: 'Financial',
  data() {
    return {
      query: '', // User's search query
      financialData: [], // Array to store financial data
      suggestions: [
        { symbol: 'AAPL', name: 'Apple Inc.' },
        { symbol: 'MSFT', name: 'Microsoft Corporation' },
        { symbol: 'GOOGL', name: 'Alphabet Inc.' },
        { symbol: 'AMZN', name: 'Amazon.com Inc.' },
        { symbol: 'TSLA', name: 'Tesla Inc.' },
      ], // Suggested stock symbols and company names
    };
  },
  methods: {
    async getFinancialData() {
      if (!this.query.trim()) return; // Prevent empty searches
      this.financialData = await fetchFinancialData(this.query);
    },
  },
};
</script>

<style scoped>
.financial {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.search-bar {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.search-bar input {
  flex-grow: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-bar button {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.search-bar button:hover {
  background-color: #0056b3;
}

.api-description {
  margin-bottom: 20px;
  font-size: 14px;
  color: #555;
  line-height: 1.5;
}

.suggestions-table {
  margin-bottom: 20px;
}

.suggestions-table h4 {
  margin-bottom: 10px;
  font-size: 16px;
  color: #333;
}

.suggestions-table table {
  width: 100%;
  border-collapse: collapse;
}

.suggestions-table th,
.suggestions-table td {
  text-align: left;
  padding: 10px;
  border: 1px solid #ddd;
}

.suggestions-table th {
  background-color: #f2f2f2;
  color: #333;
}

.search-note {
  font-size: 14px;
  color: #555;
  margin-bottom: 20px;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.card {
  padding: 15px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.card h3 {
  margin-top: 0;
  font-size: 18px;
  color: #333;
}

.card p {
  margin: 5px 0;
  font-size: 14px;
  color: #555;
}

.no-results {
  text-align: center;
  font-size: 16px;
  color: #999;
}
</style>
