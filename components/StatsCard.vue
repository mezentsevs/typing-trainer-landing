<template>
    <div
        class="group glass rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl border border-white/20 dark:border-gray-700/20 text-center magnetic-hover">
        <div
            class="w-16 h-16 rounded-full bg-gradient-to-r mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            :class="accentGradient">
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
import { StatColorScheme } from '@/enums/stats';
import type { Stat } from '@/interfaces/stats';

interface StatsCardProps {
    stat: Stat;
    colorScheme: StatColorScheme;
}

const props = defineProps<StatsCardProps>();

const gradientMap: Record<StatColorScheme, string> = {
    [StatColorScheme.Blue]: 'from-blue-500 to-cyan-500',
    [StatColorScheme.Purple]: 'from-purple-500 to-fuchsia-500',
    [StatColorScheme.Green]: 'from-green-500 to-emerald-500',
    [StatColorScheme.Orange]: 'from-orange-500 to-red-500',
};

const accentGradient: ComputedRef<string> = computed((): string => gradientMap[props.colorScheme]);
</script>
