<template>
    <section class="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div class="container mx-auto px-6 text-center z-10">
            <h1 class="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
                <TypingAnimation
                    :text="APP_NAME"
                    cursor-class="border-r-gray-800 dark:border-r-white" />
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {{ APP_SLOGAN }}
            </p>
            <PrimaryButton :href="APP_URL" class="mt-10 px-8 py-3">
                Start Training Now
            </PrimaryButton>
        </div>
    </section>
</template>

<script setup lang="ts">
import { APP_NAME, APP_SLOGAN, APP_URL } from '@/constants/app';
</script>
