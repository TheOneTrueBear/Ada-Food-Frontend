<script setup>
import Banner from './components/Banner.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView name="nav" />
  <Banner />
  <RouterView name="director" />
  <RouterView name="default" />
</template>
