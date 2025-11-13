<template>
    <BaseButton
        v-bind="$attrs"
        class="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 active:from-green-800 active:to-emerald-800 active:shadow-green-500/50">
        <slot />
    </BaseButton>
</template>
