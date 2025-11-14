<template>
    <section id="demo" class="py-20 relative overflow-hidden">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                    See It In Action
                </h2>
                <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Watch how our typing trainer helps you master blind typing with real-time
                    feedback and progress tracking
                </p>
            </div>

            <div class="max-w-4xl mx-auto">
                <div class="glass rounded-2xl p-8 border border-white/20 dark:border-gray-700/20">
                    <div
                        class="aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                        <video
                            class="w-full h-full object-cover"
                            controls
                            poster="/demo/typing-demo-poster.jpg"
                            aria-label="Typing trainer demonstration video">
                            <source src="/demo/typing-demo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        <DemoFeatureCard
                            v-for="feature in demoFeatures"
                            :key="feature.title"
                            :feature />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { DemoFeature } from '@/interfaces/demo';

const demoFeatures: DemoFeature[] = [
    { title: 'Real-time', description: 'Error highlighting and correction' },
    { title: 'Progress', description: 'Detailed statistics tracking' },
    { title: 'Virtual', description: 'Keyboard visualization' },
];
</script>
