<template>
    <section id="benefits" class="py-20 relative overflow-hidden">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                <div class="text-center lg:text-left">
                    <h2 class="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                        Unlock Your Typing Potential
                    </h2>
                    <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
                        Join thousands of users who have transformed their typing skills and
                        productivity
                    </p>
                    <PrimaryButton :href="APP_URL" class="px-8 py-4 text-lg">
                        Start Typing Now
                    </PrimaryButton>
                </div>

                <div class="glass rounded-2xl p-8 border border-white/20 dark:border-gray-700/20">
                    <ul class="space-y-6">
                        <li
                            v-for="benefit in benefits"
                            :key="benefit.title"
                            class="flex items-start">
                            <CheckIcon
                                class="w-6 h-6 text-blue-600 dark:text-cyan-400 mt-1 mr-4 flex-shrink-0" />
                            <div>
                                <h3 class="text-lg font-bold text-gray-800 dark:text-white mb-2">
                                    {{ benefit.title }}
                                </h3>
                                <p class="text-gray-600 dark:text-gray-300">
                                    {{ benefit.description }}
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { APP_URL } from '@/constants/app';

interface Benefit {
    title: string;
    description: string;
}

const benefits: Benefit[] = [
    {
        title: 'Increase Typing Speed',
        description: 'Type faster and more efficiently without looking at the keyboard',
    },
    {
        title: 'Improve Accuracy',
        description: 'Make fewer mistakes and reduce time spent on corrections',
    },
    {
        title: 'Boost Productivity',
        description: 'Get more done in less time with improved typing skills',
    },
    {
        title: 'Gain Valuable Skill',
        description: 'Stand out in the job market and enhance your digital literacy',
    },
];
</script>
