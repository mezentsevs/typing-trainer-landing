<template>
    <button
        class="p-2 rounded-lg glass hover:bg-white/20 dark:hover:bg-gray-800/20 transition-colors duration-200 group"
        aria-label="Toggle theme"
        @click="toggleTheme">
        <div class="relative w-5 h-5">
            <ThemeLightIcon
                v-if="isDark"
                class="w-5 h-5 text-yellow-500 transform transition-transform duration-500 group-hover:rotate-180" />
            <ThemeDarkIcon
                v-else
                class="w-5 h-5 text-cyan-400 transform transition-transform duration-500 group-hover:rotate-180" />
        </div>
    </button>
</template>

<script setup lang="ts">
const isDark: Ref<boolean> = ref(false);

const toggleTheme = (): void => {
    isDark.value = !isDark.value;

    if (isDark.value) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
};

onMounted((): void => {
    const savedTheme: string | null = localStorage.getItem('theme');
    const systemPrefersDark: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        isDark.value = true;
        document.documentElement.classList.add('dark');
    }
});
</script>
