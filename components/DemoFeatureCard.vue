<template>
    <div class="glass rounded-lg p-4 border border-white/20 dark:border-gray-700/20 text-center">
        <div class="text-2xl font-bold gradient-text mb-2">
            {{ feature.title }}
        </div>
        <p class="text-gray-600 dark:text-gray-300 text-sm">
            {{ feature.description }}
        </p>
    </div>
</template>

<script setup lang="ts">
import type { DemoFeature } from '@/interfaces/demo';

interface DemoFeatureCardProps {
    feature: DemoFeature;
}

defineProps<DemoFeatureCardProps>();
</script>
