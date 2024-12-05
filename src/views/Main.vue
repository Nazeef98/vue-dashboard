<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          v-model="email"
          placeholder="Enter your email"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="Enter your password"
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>

    <!-- Button to navigate to the signup page -->
    <p class="signup-link">
      Don't have an account? 
      <button @click="goToSignup">Sign up</button>
    </p>

    <!-- Public Page Button -->
    <div class="public-page-btn-container">
      <button class="public-page-btn" @click="goToPublicPage">
        Visit Public Page
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "test@gmail.com",
      password: "test",
    };
  },
  methods: {
    handleLogin() {
      if (this.email && this.password) {
        // Navigate to the home page after login
        this.$router.push("/home");
      } else {
        alert("Please fill in all fields.");
      }
    },
    goToSignup() {
      // Redirect to the signup page
      this.$router.push("/signup");
    },
    goToPublicPage() {
      // Redirect to the public page
      this.$router.push("/public-page");
    },
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: left;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #36976a;
}

.signup-link {
  text-align: center;
  margin-top: 15px;
}

.signup-link button {
  background-color: transparent;
  color: #42b983;
  border: none;
  cursor: pointer;
  font-size: 14px;
}

.signup-link button:hover {
  text-decoration: underline;
}

/* Public Page Button Styles */
.public-page-btn-container {
  text-align: center;
  margin-top: 20px;
}

.public-page-btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.public-page-btn:hover {
  background-color: #0056b3;
}
</style>
