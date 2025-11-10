<template>
    <div
        class="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950 transition-colors duration-300">
        <header
            class="glass sticky top-0 z-50 backdrop-blur-md border-b border-white/20 dark:border-gray-700/20">
            <nav class="container mx-auto px-6 py-4">
                <div class="flex items-center justify-between">
                    <!-- Logo -->
                    <div class="flex items-center space-x-3">
                        <div
                            class="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg" />
                        <span class="text-xl font-mono font-bold text-gray-800 dark:text-white">
                            Typing Trainer
                        </span>
                    </div>

                    <!-- Navigation -->
                    <div class="hidden md:flex items-center space-x-8">
                        <a
                            href="#features"
                            class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-200 font-medium">
                            Features
                        </a>
                        <a
                            href="#demo"
                            class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-200 font-medium">
                            Demo
                        </a>
                        <a
                            href="#stats"
                            class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-200 font-medium">
                            Stats
                        </a>
                    </div>

                    <!-- CTA & Theme Toggle -->
                    <div class="flex items-center space-x-4">
                        <ThemeToggle />
                        <a
                            href="https://app.typingtrainer.com"
                            class="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-mono rounded-lg transition-all duration-200 hover:shadow-lg hover:from-blue-700 hover:to-purple-700 active:shadow-2xl active:from-blue-800 active:to-purple-800 active:shadow-blue-500/50">
                            Launch App
                        </a>
                    </div>
                </div>
            </nav>
        </header>

        <main>
            <slot />
        </main>

        <!-- Floating Background Elements -->
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
const floatingCircles = [
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
