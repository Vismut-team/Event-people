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
    <div class="nav-main">
      <Navbar />
    </div>
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.nav-main {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
}

main {
  margin-top: 60px;
  width: 100%;
}
</style>
