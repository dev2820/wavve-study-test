<script setup lang="ts">
import { ref } from "vue";
import RandomRestaurant from "@/components/RandomRestaurant.vue"
import restaurantsMock from "@mocks/restaurants.mock";
import type pickedRestaurant from '@/types/Restaurant';

const restaurants = ref<pickedRestaurant[]>(restaurantsMock);
</script>

<template>
    <header class="title">🥘 결과 🥘</header>
    <main>
        <RandomRestaurant :options="restaurants"></RandomRestaurant>
    </main>
</template>