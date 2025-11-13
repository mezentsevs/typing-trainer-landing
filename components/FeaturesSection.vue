<template>
    <section id="features" class="py-20 relative overflow-hidden">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                    Master Your Typing Skills
                </h2>
                <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Advanced features designed to transform you into a typing expert
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureCard
                    v-for="(feature, index) in features"
                    :key="feature.id"
                    :title="feature.title"
                    :description="feature.description"
                    :animation-class="`animate-fade-in delay-${index * 100}`">
                    <template #icon>
                        <component :is="feature.iconComponent" class="text-white w-6 h-6" />
                    </template>
                </FeatureCard>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
interface Feature {
    id: number;
    iconComponent: Component;
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        id: 1,
        iconComponent: defineAsyncComponent(() => import('@/components/icons/LightningIcon.vue')),
        title: 'Flexible Lessons Sequence',
        description:
            'Smart random lessons generation based on language and count for personalized training.',
    },
    {
        id: 2,
        iconComponent: defineAsyncComponent(() => import('@/components/icons/SettingsIcon.vue')),
        title: 'Custom Training',
        description: 'Detailed lessons configuration adapted to your personal preferences.',
    },
    {
        id: 3,
        iconComponent: defineAsyncComponent(() => import('@/components/icons/TargetIcon.vue')),
        title: 'Final Test Strategies',
        description:
            'Multiple text sourcing including AI generation and seed database with texts by language and genre, as well as custom files.',
    },
    {
        id: 4,
        iconComponent: defineAsyncComponent(() => import('@/components/icons/RobotIcon.vue')),
        title: 'AI Text Generation',
        description:
            'AI-powered content generation across multiple languages and genres for varied practice.',
    },
    {
        id: 5,
        iconComponent: defineAsyncComponent(() => import('@/components/icons/KeyboardIcon.vue')),
        title: 'Virtual Keyboard',
        description:
            'Visual key guidance and real-time feedback to develop proper finger positioning.',
    },
    {
        id: 6,
        iconComponent: defineAsyncComponent(() => import('@/components/icons/ChartIcon.vue')),
        title: 'Progress Tracking',
        description:
            'Real-time error highlighting and detailed session analytics for continuous improvement.',
    },
];
</script>
