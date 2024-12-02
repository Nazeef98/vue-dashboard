<template>
  <div class="news-container">
    <h1>Business News - US</h1>
    <div v-if="newsArticles.length > 0" class="news-cards">
      <div
        v-for="(article, index) in newsArticles"
        :key="index"
        class="news-card"
      >
        <img
          v-if="article.urlToImage"
          :src="article.urlToImage"
          alt="Article Image"
          class="news-card-image"
        />
        <div class="news-card-content">
          <h2>{{ article.title }}</h2>
          <p>{{ article.description }}</p>
          <a :href="article.url" target="_blank" class="read-more-link">Read more</a>
        </div>
      </div>
    </div>
    <div v-else>
      <p>No business news found at the moment.</p>
    </div>
  </div>
</template>

<script>
import { fetchBusinessNews } from "@/api"; // Import the API fetching function

export default {
  data() {
    return {
      newsArticles: [], // Array to hold the news articles
    };
  },
  async created() {
    // Fetch the business news when the component is created
    this.newsArticles = await fetchBusinessNews();
  },
};
</script>

<style scoped>
.news-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.news-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.news-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.news-card:hover {
  transform: translateY(-5px);
}

.news-card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid #eee;
}

.news-card-content {
  padding: 15px;
}

.news-card-content h2 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #333;
}

.news-card-content p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 15px;
}

.read-more-link {
  font-size: 1rem;
  color: #007bff;
  text-decoration: none;
}

.read-more-link:hover {
  text-decoration: underline;
}
</style>
