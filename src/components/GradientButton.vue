<template>
    <button>
        <slot></slot>
    </button>
</template>

<style scoped>
button {
    font-weight:bold;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400%;
    animation:gradient 5s ease infinite;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 99% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
</style>