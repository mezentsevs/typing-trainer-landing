<template>
    <a
        :href="href"
        class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-200 font-medium">
        <slot />
    </a>
</template>

<script setup lang="ts">
interface NavigationLinkProps {
    href: string;
}

defineProps<NavigationLinkProps>();
</script>
