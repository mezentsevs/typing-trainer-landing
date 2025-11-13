<template>
    <a
        v-bind="$attrs"
        class="inline-flex items-center justify-center text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg active:shadow-2xl">
        <slot />
    </a>
</template>
