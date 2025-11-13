<template>
    <a
        :href
        class="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:from-blue-700 hover:to-purple-700 active:shadow-2xl active:from-blue-800 active:to-purple-800 active:shadow-blue-500/50">
        <slot />
    </a>
</template>

<script setup lang="ts">
interface PrimaryButtonProps {
    href: string;
}

defineProps<PrimaryButtonProps>();
</script>
