<script setup>
import banner from '../img/Food-Banner.png'
</script>

<template>
  <div id="banner">
    <RouterLink to="/">
      <img :src="banner" alt="Food banner" class="banner">
    </RouterLink>
  </div>
</template>