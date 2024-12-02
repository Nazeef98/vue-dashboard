<template>
  <div id="app">
    <!-- Check the current route -->
    <div v-if="showDrawer">
      <Drawer />
    </div>
    <router-view />
  </div>
</template>

<script>
import Home from "@/views/Home.vue"; // Import the Drawer component

export default {
  name: "App",
  computed: {
    // Determines whether the drawer should be displayed
    showDrawer() {
      // Define the routes where the drawer should be displayed
      const drawerRoutes = ["home", "dashboard", "about-us", "weather"];
      return drawerRoutes.includes(this.$route.name);
    },
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}
</style>
