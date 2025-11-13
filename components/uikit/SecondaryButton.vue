<template>
    <BaseButton
        v-bind="$attrs"
        class="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 active:from-gray-800 active:to-gray-900 active:shadow-gray-500/50">
        <slot />
    </BaseButton>
</template>
