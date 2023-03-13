<script setup lang="ts">
import { ref, computed } from 'vue'
import type Restaurant from '@/types/Restaurant';
import CustomButton from '@/components/CustomButton.vue';
import CustomChip from '@/components/CustomChip.vue';

const { options } = defineProps<{ options: Restaurant[] }>()
const pickedIndex = ref(-1);
const pickedRestaurant = computed<Restaurant>(()=>{
  return options[pickedIndex.value];
})
const pickOne = () => {
  pickedIndex.value = Math.floor(Math.random() * options.length);
}

pickOne()
</script>

<template>
    <section class="result" >
      <p class="name">{{ pickedRestaurant.name }}</p>
      <menu class="menu">
        <CustomChip v-for="menu in pickedRestaurant.menus" :label="menu"></CustomChip>
        
      </menu>
      <p class="price">가격대: 
        <span class="won">{{ pickedRestaurant.price }}₩</span></p>
      <div class="review">
        <label class="review-label">한줄 리뷰</label>
        <p class="review-text">"{{ pickedRestaurant.review }}"</p>
      </div>
    </section>
    <CustomButton @click="pickOne">Reroll</CustomButton>
</template>

<style scoped>
.name {
  font-size:4rem;
  font-weight:bold;
  margin:2rem;
}
menu {
  padding: 0;
}
menu > * {
  margin-right:0.4rem;
}
.review {
  padding:1rem 2rem;
  background-color: #c9ffdc;
  border-radius:1rem;
  margin-bottom:1rem;
}
.review-label {
  font-weight: bold;
}
.review-text {
  font-style:italic;
  margin:0;
  margin-top:1.5rem;
}
.price .won{
  font-weight:bold;
}

</style>
