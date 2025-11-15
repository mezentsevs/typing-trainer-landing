<template>
    <footer class="glass border-t border-white/20 dark:border-gray-700/20">
        <div class="container mx-auto px-6 py-12">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div class="md:col-span-2">
                    <div class="flex items-center space-x-3 mb-4">
                        <div
                            class="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg" />
                        <span class="text-xl font-mono font-bold text-gray-800 dark:text-white">
                            {{ APP_NAME }}
                        </span>
                    </div>
                    <p class="text-gray-600 dark:text-gray-300 max-w-md">
                        {{ APP_SLOGAN }}
                    </p>
                </div>

                <nav aria-label="Footer navigation">
                    <h3 class="text-lg font-bold text-gray-800 dark:text-white mb-4">Navigation</h3>
                    <ul class="space-y-3">
                        <li v-for="link in quickLinks" :key="link.href">
                            <TextLink :href="link.href">
                                {{ link.text }}
                            </TextLink>
                        </li>
                    </ul>
                </nav>

                <div>
                    <h3 class="text-lg font-bold text-gray-800 dark:text-white mb-4">Contact</h3>
                    <ul class="space-y-3">
                        <li v-for="link in contactLinks" :key="link.href">
                            <TextLink :href="link.href">
                                {{ link.text }}
                            </TextLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="border-t border-white/20 dark:border-gray-700/20 mt-8 pt-8 text-center">
                <p class="text-gray-600 dark:text-gray-300 text-sm">
                    © {{ currentYear }} {{ APP_NAME }}. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { APP_NAME, APP_SLOGAN } from '@/constants/app';
import type { Link } from '@/interfaces/navigation';

interface FooterProps {
    quickLinks: Link[];
    contactLinks: Link[];
}

defineProps<FooterProps>();

const currentYear: number = new Date().getFullYear();
</script>
