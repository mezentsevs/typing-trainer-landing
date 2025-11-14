<template>
    <div
        class="group glass rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl border border-white/20 dark:border-gray-700/20 text-center magnetic-hover">
        <div
            class="w-16 h-16 rounded-full bg-gradient-to-r mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            :class="stat.accentColor">
            <span class="text-2xl font-bold text-white">{{ stat.value }}</span>
        </div>

        <h3
            class="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
            {{ stat.label }}
        </h3>

        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {{ stat.description }}
        </p>
    </div>
</template>

<script setup lang="ts">
import type { Stat } from '@/interfaces/stats';

interface StatsCardProps {
    stat: Stat;
}

defineProps<StatsCardProps>();
</script>
