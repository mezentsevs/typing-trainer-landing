<template>
    <section id="stats" class="py-20 relative overflow-hidden">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                    Proven Results
                </h2>
                <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Join thousands of users who transformed their typing skills with our trainer
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                <StatsCard v-for="stat in stats" :key="stat.id" :stat />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { Stat } from '@/interfaces/stats';

const stats: Stat[] = [
    {
        id: 1,
        value: '85%',
        label: 'Accuracy Improvement',
        description: 'Average increase in typing accuracy',
        accentColor: 'from-blue-500 to-cyan-500',
    },
    {
        id: 2,
        value: '2.5x',
        label: 'Speed Boost',
        description: 'Typing speed improvement',
        accentColor: 'from-purple-500 to-fuchsia-500',
    },
    {
        id: 3,
        value: '50k+',
        label: 'Active Users',
        description: 'Community of typing enthusiasts',
        accentColor: 'from-green-500 to-emerald-500',
    },
    {
        id: 4,
        value: '95%',
        label: 'Satisfaction Rate',
        description: 'Users who achieved their goals',
        accentColor: 'from-orange-500 to-red-500',
    },
];
</script>
