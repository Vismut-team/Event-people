<script setup>
import { onMounted } from "vue"

import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { useApiStore } from '@/stores/ApiStore'
const api = useApiStore()
onMounted(() => {
  api.startSession()
})
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
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
}

main {
  margin-top: 100px;
  width: 100%;
}

footer {
  height: 15%;
  width: 100%;
}
</style>
