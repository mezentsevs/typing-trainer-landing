<template>
    <section id="pricing" class="py-20 relative overflow-hidden">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                    Choose Your Plan
                </h2>
                <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Start free, upgrade anytime. Unlock advanced features for maximum productivity.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <PricingCard
                    v-for="plan in pricingPlans"
                    :key="plan.id"
                    :plan
                    class="magnetic-hover" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { APP_URL } from '@/constants/app';
import type { PricingPlan } from '@/interfaces/pricing';

const pricingPlans: PricingPlan[] = [
    {
        id: 1,
        name: 'Free',
        price: '$0',
        description: 'Perfect for getting started with blind typing',
        features: [
            'Basic random lessons generation',
            'Final test from seed database (fiction, non-fiction, poetry)',
            'Real-time error highlighting',
            'Basic progress statistics',
            'Virtual keyboard guidance',
        ],
        ctaText: 'Start Free',
        ctaHref: APP_URL,
        accentColor: 'from-gray-500 to-gray-600',
        billingPeriod: 'forever',
    },
    {
        id: 2,
        name: 'Premium Monthly',
        price: '$9',
        description: 'Advanced features for maximum productivity',
        features: [
            'Advanced lesson customization',
            'AI-generated final test texts',
            'Custom file upload for tests',
            'Extended text genres library',
            'Detailed progress analytics',
            'Priority feature updates',
            'Advanced statistics dashboard',
        ],
        ctaText: 'Upgrade Now',
        ctaHref: APP_URL,
        popular: true,
        accentColor: 'from-blue-600 to-purple-600',
        billingPeriod: 'per month',
    },
    {
        id: 3,
        name: 'Premium Annual',
        price: '$90',
        originalPrice: '$108',
        description: 'Best value - save 20% with yearly billing',
        features: [
            'Advanced lesson customization',
            'AI-generated final test texts',
            'Custom file upload for tests',
            'Extended text genres library',
            'Detailed progress analytics',
            'Priority feature updates',
            'Advanced statistics dashboard',
            'Save 20% compared to monthly',
        ],
        ctaText: 'Save 20%',
        ctaHref: APP_URL,
        accentColor: 'from-green-600 to-emerald-600',
        billingPeriod: 'per year',
    },
];
</script>
