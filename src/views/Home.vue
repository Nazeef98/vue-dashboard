<template>
  <div class="home-view">
    <!-- Sidebar -->
    <div v-bind:class="{'sidebar': true, 'sidebar-open': isSidebarVisible}">
      <ul class="menu">
        <li @click="navigateTo('home')" :class="{ active: activeRoute === 'home' }">Home</li>
        <li @click="navigateTo('financial')" :class="{ active: activeRoute === 'financial' }">Financial</li>
        <li @click="navigateTo('news')" :class="{ active: activeRoute === 'news' }">News</li>
        <li @click="navigateTo('weather')" :class="{ active: activeRoute === 'weather' }">Weather</li>
        <li @click="navigateTo('about-us')" :class="{ active: activeRoute === 'about-us' }">About Us</li>
        <!-- Logout Menu Item -->
        <li @click="logout" class="logout-item">Logout</li>
      </ul>
    </div>

    <!-- Main Content -->
    <div
      class="main-content"
      v-bind:style="{ marginLeft: isSidebarVisible ? '250px' : '0' }"
    >
      <button class="toggle-btn" @click="toggleSidebar">
        ☰ <!-- Sidebar toggle button -->
      </button>

      <!-- Conditionally Render Chart for Home -->
      <div v-if="activeRoute === 'home'">
        <ChartView /> <!-- Default Chart -->
      </div>

      <!-- Dynamically Render Content for Other Routes -->
      <div v-else>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import ChartView from "./ChartView.vue"; // Import the ChartView component

export default {
  name: "HomeView",
  components: {
    ChartView, // Register ChartView as a local component
  },
  data() {
    return {
      isSidebarVisible: true, // Controls sidebar visibility
      activeRoute: "home", // Default route is 'home'
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible; // Toggle sidebar visibility
    },
    navigateTo(route) {
      this.activeRoute = route; // Update active route
      this.$router.push({ name: route }); // Navigate to the selected route
    },
    logout() {
      // Perform any logout actions, such as clearing authentication state
      this.$router.push({ name: 'login' }); // Navigate to login page
    },
  },
};
</script>

<style scoped>
/* Home view */
.home-view {
  display: flex;
  height: 100vh;
}

/* Sidebar styles */
.sidebar {
  width: 250px;
  background-color: #333;
  color: white;
  padding: 20px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
}

.sidebar-open {
  transform: translateX(0); /* Show sidebar when toggled */
}

.menu {
  list-style: none;
  padding: 0;
}

.menu li {
  padding: 10px 15px;
  cursor: pointer;
  border-bottom: 1px solid #444;
}

.menu li:hover {
  background-color: #444;
}

.menu li.active {
  background-color: #555;
}

/* Logout Menu Item */
.logout-item {
  padding: 10px 15px;
  cursor: pointer;
  border-top: 1px solid #444;
  color: red;
}

.logout-item:hover {
  background-color: #444;
}

/* Main Content */
.main-content {
  flex-grow: 1;
  padding: 20px;
  background-color: #f5f5f5;
  overflow-y: auto;
  transition: margin-left 0.3s ease-in-out; /* Smooth transition for resizing */
}

/* Sidebar toggle button */
.toggle-btn {
  position: absolute;
  top: 20px;
  left: 20px;
  background: none;
  border: none;
  font-size: 30px;
  color: #333;
  cursor: pointer;
  transition: background-color 0.2s ease; /* Smooth transition for background color */
}

/* Highlight button when pressed */
.toggle-btn:active {
  background-color: rgba(0, 0, 0, 0.1); /* Light background color when pressed */
  color: #555; /* Optionally change text color when pressed */
}

/* Optional: Highlight button on focus (for accessibility) */
.toggle-btn:focus {
  outline: none; /* Remove the default outline */
  background-color: rgba(0, 0, 0, 0.1); /* Same effect as :active */
}
</style>
