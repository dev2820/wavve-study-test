<script setup lang="ts">
import GradientButton from '@/components/GradientButton.vue';
import {router} from "@/router"

const gotoResult = () => {
    router.push('Result')
}
</script>

<template>
    <header class="title">여의도 랜덤 음식점 추천기</header>
    <main>
        <GradientButton class="link" @click="gotoResult">
            돌리기
        </GradientButton>
    </main>
</template>

<style scoped>
.link {
    margin-top:5rem;
}
</style>