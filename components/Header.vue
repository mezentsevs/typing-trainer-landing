<template>
    <header
        class="glass sticky top-0 z-50 backdrop-blur-md border-b border-white/20 dark:border-gray-700/20">
        <nav class="container mx-auto px-6 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-3">
                    <LogoIcon class="w-8 h-8 text-blue-500 dark:text-blue-600" />
                    <span class="text-xl font-mono font-bold text-gray-800 dark:text-white">
                        {{ APP_NAME }}
                    </span>
                </div>

                <div class="hidden md:flex items-center space-x-8">
                    <NavigationLink v-for="link in navLinks" :key="link.href" :href="link.href">
                        {{ link.text }}
                    </NavigationLink>
                </div>

                <div class="flex items-center space-x-4">
                    <ThemeToggle />
                    <PrimaryButton :href="APP_URL" class="px-6 py-2 font-mono">
                        Launch App
                    </PrimaryButton>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { APP_NAME, APP_URL } from '@/constants/app';
import type { Link } from '@/interfaces/navigation';

interface HeaderProps {
    navLinks: Link[];
}

defineProps<HeaderProps>();
</script>
