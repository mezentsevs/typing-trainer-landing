<template>
    <div
        class="group glass rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl border border-white/20 dark:border-gray-700/20 relative flex flex-col h-full"
        :class="[
            plan.popular ? 'hover:shadow-blue-500/20 scale-105 z-10' : 'hover:shadow-gray-500/10',
        ]">
        <div v-if="plan.popular" class="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <span
                class="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                Most Popular
            </span>
        </div>

        <div class="text-center mb-8">
            <h3
                class="text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                {{ plan.name }}
            </h3>
            <div class="flex items-baseline justify-center mb-4">
                <span class="text-4xl font-bold text-gray-800 dark:text-white">
                    {{ plan.price }}
                </span>
                <span class="text-gray-600 dark:text-gray-300 ml-1">
                    {{ plan.billingPeriod }}
                </span>
            </div>
            <div
                v-if="plan.originalPrice"
                class="text-sm text-gray-500 dark:text-gray-400 line-through mb-2">
                {{ plan.originalPrice }}
            </div>
            <p class="text-gray-600 dark:text-gray-300">
                {{ plan.description }}
            </p>
        </div>

        <ul class="space-y-4 mb-8 flex-grow">
            <li v-for="feature in plan.features" :key="feature" class="flex items-start">
                <div
                    class="w-5 h-5 rounded-full bg-gradient-to-r flex-shrink-0 mt-0.5 mr-3"
                    :class="plan.accentColor" />
                <span class="text-gray-700 dark:text-gray-300">
                    {{ feature }}
                </span>
            </li>
        </ul>

        <SecondaryButton
            v-if="plan.id === 1"
            :href="plan.ctaHref"
            class="w-full py-3 text-center font-medium">
            {{ plan.ctaText }}
        </SecondaryButton>

        <PrimaryButton
            v-else-if="plan.id === 2"
            :href="plan.ctaHref"
            class="w-full py-3 text-center font-medium">
            {{ plan.ctaText }}
        </PrimaryButton>

        <SuccessButton v-else :href="plan.ctaHref" class="w-full py-3 text-center font-medium">
            {{ plan.ctaText }}
        </SuccessButton>
    </div>
</template>

<script setup lang="ts">
import type { PricingPlan } from '@/interfaces/pricing';

interface PricingCardProps {
    plan: PricingPlan;
}

defineProps<PricingCardProps>();
</script>
