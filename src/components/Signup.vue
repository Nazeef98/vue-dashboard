<template>
  <div class="signup-container">
    <h1>Signup</h1>

    <!-- Signup Form -->
    <form @submit.prevent="handleSignup">
      <!-- Name Field -->
      <div class="form-group">
        <label for="name">Full Name:</label>
        <input
          type="text"
          id="name"
          v-model="name"
          placeholder="Enter your full name"
          required
        />
      </div>

      <!-- Email Field -->
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

      <!-- Password Field -->
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

      <!-- Re-enter Password Field -->
      <div class="form-group">
        <label for="rePassword">Re-enter Password:</label>
        <input
          type="password"
          id="rePassword"
          v-model="rePassword"
          placeholder="Re-enter your password"
          required
        />
      </div>

      <!-- Signup Button -->
      <button type="submit">Sign up</button>
    </form>

    <!-- Login Link -->
    <p class="login-link">
      Already have an account? 
      <button @click="goToLogin">Login</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      rePassword: ''
    };
  },
  methods: {
    handleSignup() {
      if (this.password === this.rePassword) {
        alert(`Welcome, ${this.name}! Signup successful.`);
        // Redirect to login after successful signup
        this.$router.push("/login");
      } else {
        alert("Passwords do not match. Please try again.");
      }
    },
    goToLogin() {
      // Navigate to the login page
      this.$router.push("/");
    }
  }
}
</script>

<style scoped lang="scss">
.signup-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: left;
}

h1 {
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

.login-link {
  text-align: center;
  margin-top: 15px;
}

.login-link button {
  background-color: transparent;
  color: #42b983;
  border: none;
  cursor: pointer;
  font-size: 14px;
}

.login-link button:hover {
  text-decoration: underline;
}
</style>
