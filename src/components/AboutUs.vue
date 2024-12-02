<template>
  <div class="info-container">
    <h2>Meet the Developer</h2>
    
    <div class="developer">
      <h3>Nazeef Ahmad Farooqui</h3>
      <p><strong>Role:</strong> Developer</p>
      <p><strong>Skills:</strong> Mobile Development (React Native, Expo), Web Development (HTML, CSS, JavaScript)</p>
      <p><strong>Contact:</strong> nazeef@example.com</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeveloperInfo",
};
</script>

<style scoped>
.info-container {
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
  color: #333;
}

.developer {
  margin-bottom: 30px;
}

.developer h3 {
  font-size: 22px;
  color: #007BFF;
}

.developer p {
  font-size: 16px;
  color: #555;
}
</style>
