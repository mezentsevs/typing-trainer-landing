<template>
    <BaseButton
        v-bind="$attrs"
        class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 active:from-blue-800 active:to-purple-800 active:shadow-blue-500/50">
        <slot />
    </BaseButton>
</template>
