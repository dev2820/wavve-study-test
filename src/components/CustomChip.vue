<script setup lang="ts">
defineProps<{ label:string }>();

</script>

<template>
    <label class="chip">
        {{ label }}
    </label>
</template>

<style scoped>
label.chip {
    font-size:0.75rem;
    border-radius:0.25rem;
    background-color: #efefef;
    padding:0.35rem 0.5rem;
}
</style>