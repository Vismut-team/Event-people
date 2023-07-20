<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <div>
    <nav>
      <Navbar />
    </nav>
    <main scrolling="auto">
      <RouterView />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style scoped>
nav {
  width: 100%;
  margin: 0;
  padding: 0;
}

main {
  width: 100%;
}

footer {
  height: 15%;
  width: 100%;
}
</style>
