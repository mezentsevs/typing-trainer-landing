<template>
    <div
        class="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950 transition-colors duration-300">
        <Header />

        <main>
            <slot />
        </main>

        <Footer />

        <div class="fixed inset-0 pointer-events-none overflow-hidden z-0">
            <div
                v-for="(circle, index) in floatingCircles"
                :key="index"
                class="absolute rounded-full animate-float opacity-20 dark:opacity-10"
                :class="circle.class" />
        </div>
    </div>
</template>

<script setup lang="ts">
const floatingCircles: Array<{ class: string }> = [
    { class: 'top-10 left-10 w-24 h-24 bg-blue-300/70 dark:bg-cyan-500' },
    { class: 'bottom-20 right-20 w-32 h-32 bg-fuchsia-300/70 dark:bg-purple-500 delay-1000' },
    { class: 'top-1/2 left-1/4 w-16 h-16 bg-rose-300/70 dark:bg-red-500 delay-500' },
];
</script>

<style scoped>
.animate-float {
    animation: float 8s ease-in-out infinite;
}

@keyframes float {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
    100% {
        transform: translateY(0);
    }
}

.delay-500 {
    animation-delay: 0.5s;
}

.delay-1000 {
    animation-delay: 1s;
}
</style>
