<template>
    <div
        class="glass rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 border border-white/20 dark:border-gray-700/20 group"
        :class="animationClass">
        <div
            class="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-shadow duration-300">
            <slot name="icon" />
        </div>
        <h3
            class="text-xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
            {{ title }}
        </h3>
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            {{ description }}
        </p>
    </div>
</template>

<script setup lang="ts">
interface FeatureCardProps {
    title: string;
    description: string;
    animationClass?: string;
}

defineProps<FeatureCardProps>();
</script>
