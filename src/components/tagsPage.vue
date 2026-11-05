<template>
  <div id="tag" class="meal-images">
    <div>
      <RouterLink to="/BreakfastOptions">
        <img :src="breakfast" alt="Breakfast">
      </RouterLink>
    </div>
    <div>
      <RouterLink to="/LunchOptions">
        <img :src="lunch" alt="Lunch">
      </RouterLink>
    </div>
    <div>
      <RouterLink to="/DinnerOptions">
        <img :src="dinner" alt="Dinner">
      </RouterLink>
    </div>
    <div>
      <RouterLink to="/DessertOptions">
        <img :src="dessert" alt="Dessert">
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import breakfast from '../img/breakfast.png'
import lunch from '../img/lunch.png'
import dinner from '../img/dinner.png'
import dessert from '../img/dessert.png'
import { RouterLink } from 'vue-router'
</script>