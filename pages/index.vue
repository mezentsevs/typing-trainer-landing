<template>
    <HeroSection />
    <FeaturesSection />
    <DemoSection />
    <StatsSection />
    <PricingSection />
    <BenefitsSection />
</template>

<script setup lang="ts">
import { APP_URL, APP_SUPPORT_EMAIL } from '@/constants/app';
import type { Link } from '@/interfaces/navigation';

definePageMeta({
    navLinks: [
        { href: '#features', text: 'Features' },
        { href: '#demo', text: 'Demo' },
        { href: '#stats', text: 'Stats' },
        { href: '#pricing', text: 'Pricing' },
        { href: '#benefits', text: 'Benefits' },
    ] as Link[],
    quickLinks: [
        { href: '#features', text: 'Features' },
        { href: '#demo', text: 'Demo' },
        { href: '#stats', text: 'Stats' },
        { href: '#pricing', text: 'Pricing' },
        { href: '#benefits', text: 'Benefits' },
    ] as Link[],
    contactLinks: [
        { href: `mailto:${APP_SUPPORT_EMAIL}`, text: APP_SUPPORT_EMAIL },
        { href: APP_URL, text: 'Launch Application' },
    ] as Link[],
});
</script>
